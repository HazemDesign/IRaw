/**
 * Utility function to retry loading an image when it fails
 * @param {HTMLImageElement} img - The image element to handle
 * @param {string} src - The image source URL
 * @param {number} maxRetries - Maximum number of retries (default: 3)
 * @param {number} retryDelay - Delay between retries in ms (default: 1000)
 */
function handleImageError(img, src, maxRetries = 3, retryDelay = 1000) {
    let retryCount = 0;
    
    // Set the image source
    img.src = src;
    
    // Add error event handler
    img.onerror = function() {
        if (retryCount < maxRetries) {
            retryCount++;
            console.log(`Retrying image load (${retryCount}/${maxRetries}): ${src}`);
            
            // Try again after delay
            setTimeout(() => {
                // Add cache-busting parameter to force a fresh request
                const cacheBuster = `?retry=${retryCount}&t=${new Date().getTime()}`;
                img.src = src + cacheBuster;
            }, retryDelay);
        } else {
            console.error(`Failed to load image after ${maxRetries} attempts: ${src}`);
            
            // Create a data URL for a generic image placeholder with the product name
            const text = img.alt || 'Image not available';
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Set canvas size based on original image size or default
            canvas.width = img.width || 300;
            canvas.height = img.height || 200;
            
            // Draw placeholder background
            ctx.fillStyle = '#f0f0f0';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw border
            ctx.strokeStyle = '#cccccc';
            ctx.lineWidth = 2;
            ctx.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);
            
            // Draw icon
            ctx.fillStyle = '#aaaaaa';
            ctx.beginPath();
            const iconSize = Math.min(canvas.width, canvas.height) * 0.3;
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2 - iconSize * 0.3;
            
            // Draw a camera icon shape
            ctx.moveTo(centerX - iconSize/2, centerY - iconSize/4);
            ctx.lineTo(centerX + iconSize/2, centerY - iconSize/4);
            ctx.lineTo(centerX + iconSize/2, centerY + iconSize/4);
            ctx.lineTo(centerX - iconSize/2, centerY + iconSize/4);
            ctx.closePath();
            ctx.fill();
            
            // Draw a lens circle
            ctx.beginPath();
            ctx.arc(centerX, centerY, iconSize * 0.3, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw text
            ctx.fillStyle = '#555555';
            ctx.font = '14px Arial, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            // Handle long text - split into multiple lines if needed
            const maxLineWidth = canvas.width * 0.8;
            const words = text.split(' ');
            const lines = [];
            let currentLine = words[0];
            
            for (let i = 1; i < words.length; i++) {
                const testLine = currentLine + ' ' + words[i];
                const metrics = ctx.measureText(testLine);
                if (metrics.width > maxLineWidth) {
                    lines.push(currentLine);
                    currentLine = words[i];
                } else {
                    currentLine = testLine;
                }
            }
            lines.push(currentLine);
            
            // Draw each line of text
            const lineHeight = 20;
            let y = centerY + iconSize/2 + 20; // Position below the icon
            
            lines.forEach(line => {
                ctx.fillText(line, centerX, y);
                y += lineHeight;
            });
            
            // Set the image source to the canvas data URL
            img.src = canvas.toDataURL('image/png');
            img.alt = text;
        }
    };
}

// Export the utility function
export { handleImageError }; 