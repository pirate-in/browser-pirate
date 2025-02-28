## 5. Loading Your Extension in Chrome

To install your Chrome extension locally during development:

1. Open Chrome browser and navigate to `chrome://extensions/`
2. Enable "Developer mode" by toggling the switch in the top-right corner
3. Click the "Load unpacked" button that appears
4. Select the directory containing your extension files (manifest.json, content.js, etc.)
5. The extension should now appear in your list of installed extensions
6. If you make changes to your extension code, click the refresh icon on your extension card to update it

## 6. Troubleshooting Your Extension

If your extension isn't working as expected, try these steps:

1. **Check for console errors**:
   - Right-click on the webpage where your extension should run
   - Select "Inspect" from the context menu
   - Navigate to the "Console" tab to see any JavaScript errors

2. **Verify correct site matching**:
   - Ensure the URLs in your manifest.json "matches" array correctly target site.com
   - Test with wildcard patterns like `*://*.site.com/*` to catch all Indeed subdomains

3. **Extension visibility issues**:
   - If buttons aren't visible, check z-index values (should be high, like 999999)
   - Temporarily set elements to bright colors and fixed positions for testing
   - Ensure the CSS isn't being overridden by the target website

4. **DOM timing issues**:
   - Use the `run_at` property in content_scripts to control when scripts execute
   - Try using `document_idle` instead of relying on DOMContentLoaded
   - Add console.log statements to verify script execution timing

5. **Reload and restart**:
   - Refresh the extension in chrome://extensions/
   - Reload the target webpage
   - In some cases, restarting Chrome completely may help

6. **Check permissions**:
   - Verify that your manifest includes the necessary permissions
   - For more advanced functionality, you may need additional permissions