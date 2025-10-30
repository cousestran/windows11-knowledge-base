# Creating a Bootable Windows 11 USB Drive

<div class="usb-intro">
    <p>This guide will walk you through creating a bootable USB drive for Windows 11 installation. Choose the method that best suits your needs from the tabs below.</p>
    <div class="system-requirements">
        <h4>Requirements:</h4>
        <ul>
            <li>A USB flash drive with at least 8GB of storage (16GB recommended)</li>
            <li>Windows 10/11 PC with internet connection</li>
            <li>Administrator privileges</li>
            <li>Windows 11 ISO file (for Rufus and Third-party methods)</li>
        </ul>
    </div>
</div>

<div class="tabs">
    <div class="tab-buttons">
        <button class="tab-button active" data-tab="media-creation-tool">Media Creation Tool</button>
        <button class="tab-button" data-tab="rufus">Rufus</button>
        <button class="tab-button" data-tab="third-party">Third-party Tools</button>
    </div>

    <!-- Media Creation Tool Tab -->
    <div id="media-creation-tool" class="tab-content active">
        <div class="method-header">
            <h2>Using Windows 11 Media Creation Tool</h2>
            <div class="download-info">
                <a href="https://www.microsoft.com/software-download/windows11" class="btn btn-primary" target="_blank">
                    <span class="ms-Icon ms-Icon--Download" aria-hidden="true"></span> Download Media Creation Tool
                </a>
                <div class="file-info">
                    <span class="ms-Icon ms-Icon--FilePDB" aria-hidden="true"></span> 
                    <span>File size: ~18MB</span>
                </div>
                <div class="os-requirements">
                    <span class="ms-Icon ms-Icon--WindowsLogo" aria-hidden="true"></span>
                    <span>Windows 10/11 required</span>
                </div>
            </div>
        </div>

        <div class="step-by-step">
            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <h3>Download the Media Creation Tool</h3>
                    <p>Click the download button above to get the Media Creation Tool from Microsoft's official website.</p>
                    <div class="screenshot-placeholder">
                        <div class="placeholder-content">[Screenshot: Microsoft's download page]</div>
                        <div class="caption">Download the Media Creation Tool from Microsoft</div>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <h3>Run the Tool</h3>
                    <p>Locate the downloaded file (MediaCreationToolW11.exe) and run it as administrator.</p>
                    <div class="alert info">
                        <span class="ms-Icon ms-Icon--Info" aria-hidden="true"></span>
                        <div>If prompted by User Account Control, click <strong>Yes</strong> to allow the app to make changes to your device.</div>
                    </div>
                    <div class="screenshot-placeholder">
                        <div class="placeholder-content">[Screenshot: UAC prompt]</div>
                        <div class="caption">Allow the app to make changes</div>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <h3>Accept License Terms</h3>
                    <p>Read and accept the Microsoft Software License Terms to continue.</p>
                    <div class="screenshot-placeholder">
                        <div class="placeholder-content">[Screenshot: License terms screen]</div>
                        <div class="caption">Accept the license terms to proceed</div>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                    <h3>Choose Installation Media</h3>
                    <p>Select "Create installation media (USB flash drive, DVD, or ISO file) for another PC" and click Next.</p>
                    <div class="screenshot-placeholder">
                        <div class="placeholder-content">[Screenshot: Media selection screen]</div>
                        <div class="caption">Select the second option to create installation media</div>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">5</div>
                <div class="step-content">
                    <h3>Select Language and Edition</h3>
                    <p>Choose your language, Windows 11 edition, and architecture (64-bit recommended).</p>
                    <div class="alert warning">
                        <span class="ms-Icon ms-Icon--Warning" aria-hidden="true"></span>
                        <div>Make sure to select the correct architecture (32-bit or 64-bit) that matches your PC's processor.</div>
                    </div>
                    <div class="screenshot-placeholder">
                        <div class="placeholder-content">[Screenshot: Language and edition selection]</div>
                        <div class="caption">Select your language, edition, and architecture</div>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">6</div>
                <div class="step-content">
                    <h3>Choose Media Type</h3>
                    <p>Select "USB flash drive" and click Next.</p>
                    <div class="screenshot-placeholder">
                        <div class="placeholder-content">[Screenshot: Media type selection]</div>
                        <div class="caption">Select USB flash drive as the media type</div>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">7</div>
                <div class="step-content">
                    <h3>Select USB Drive</h3>
                    <p>Choose your USB drive from the list and click Next.</p>
                    <div class="alert critical">
                        <span class="ms-Icon ms-Icon--ErrorBadge" aria-hidden="true"></span>
                        <div><strong>Warning:</strong> All data on the selected USB drive will be erased. Make sure to back up any important files before proceeding.</div>
                    </div>
                    <div class="screenshot-placeholder">
                        <div class="placeholder-content">[Screenshot: USB drive selection]</div>
                        <div class="caption">Select your USB drive from the list</div>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">8</div>
                <div class="step-content">
                    <h3>Create Bootable USB</h3>
                    <p>The tool will now download Windows 11 and create the bootable USB drive. This may take some time depending on your internet connection.</p>
                    <div class="screenshot-placeholder">
                        <div class="placeholder-content">[Screenshot: Download and creation progress]</div>
                        <div class="caption">The tool will show download and creation progress</div>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">9</div>
                <div class="step-content">
                    <h3>Completion</h3>
                    <p>Once the process is complete, you'll see a success message. Click "Finish" to complete the process.</p>
                    <div class="alert success">
                        <span class="ms-Icon ms-Icon--Completed" aria-hidden="true"></span>
                        <div><strong>Success!</strong> Your bootable USB drive is now ready. Safely eject the USB drive from your computer.</div>
                    </div>
                    <div class="screenshot-placeholder">
                        <div class="placeholder-content">[Screenshot: Completion screen]</div>
                        <div class="caption">Bootable USB creation completed successfully</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Rufus Tab -->
    <div id="rufus" class="tab-content">
        <div class="method-header">
            <h2>Using Rufus</h2>
            <div class="download-info">
                <a href="https://rufus.ie/" class="btn btn-primary" target="_blank">
                    <span class="ms-Icon ms-Icon--Download" aria-hidden="true"></span> Download Rufus
                </a>
                <div class="file-info">
                    <span class="ms-Icon ms-Icon--FilePDB" aria-hidden="true"></span> 
                    <span>File size: ~1.3MB (Portable)</span>
                </div>
                <div class="os-requirements">
                    <span class="ms-Icon ms-Icon--WindowsLogo" aria-hidden="true"></span>
                    <span>Windows 7 or later</span>
                </div>
            </div>
        </div>

        <div class="step-by-step">
            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <h3>Download Windows 11 ISO</h3>
                    <p>Download the Windows 11 ISO file from Microsoft's website.</p>
                    <div class="screenshot-placeholder">
                        <div class="placeholder-content">[Screenshot: Microsoft ISO download page]</div>
                        <div class="caption">Download Windows 11 ISO from Microsoft</div>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <h3>Run Rufus</h3>
                    <p>Launch Rufus (no installation required for the portable version).</p>
                    <div class="screenshot-placeholder">
                        <div class="placeholder-content">[Screenshot: Rufus main interface]</div>
                        <div class="caption">Rufus main interface</div>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <h3>Select USB Drive</h3>
                    <p>Choose your USB drive from the Device dropdown menu.</p>
                    <div class="alert critical">
                        <span class="ms-Icon ms-Icon--ErrorBadge" aria-hidden="true"></span>
                        <div><strong>Warning:</strong> All data on the selected drive will be destroyed.</div>
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                    <h3>Select Windows 11 ISO</h3>
                    <p>Click "Select" and choose the Windows 11 ISO file you downloaded.</p>
                </div>
            </div>

            <div class="step">
                <div class="step-number">5</div>
                <div class="step-content">
                    <h3>Configure Settings</h3>
                    <p>Use these recommended settings:</p>
                    <ul>
                        <li>Partition scheme: GPT</li>
                        <li>Target system: UEFI (non-CSM)</li>
                        <li>File system: NTFS</li>
                    </ul>
                </div>
            </div>

            <div class="step">
                <div class="step-number">6</div>
                <div class="step-content">
                    <h3>Start the Process</h3>
                    <p>Click "Start" and wait for the process to complete.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Third-party Tools Tab -->
    <div id="third-party" class="tab-content">
        <div class="method-header">
            <h2>Third-party Tools</h2>
            <p>Alternative tools for creating bootable USB drives:</p>
        </div>

        <div class="tools-grid">
            <div class="tool-card">
                <h3>Ventoy</h3>
                <p>Create bootable USB drives with multiple ISO files.</p>
                <a href="https://www.ventoy.net/" class="btn btn-secondary" target="_blank">Download</a>
                <div class="tool-info">
                    <span class="ms-Icon ms-Icon--FilePDB"></span> ~15MB | 
                    <span class="ms-Icon ms-Icon--WindowsLogo"></span> Windows/Linux
                </div>
            </div>

            <div class="tool-card">
                <h3>Balena Etcher</h3>
                <p>Simple, cross-platform USB image writer.</p>
                <a href="https://www.balena.io/etcher/" class="btn btn-secondary" target="_blank">Download</a>
                <div class="tool-info">
                    <span class="ms-Icon ms-Icon--FilePDB"></span> ~250MB | 
                    <span class="ms-Icon ms-Icon--WindowsLogo"></span> Windows/macOS/Linux
                </div>
            </div>

            <div class="tool-card">
                <h3>UNetbootin</h3>
                <p>Supports various Linux distributions and Windows.</p>
                <a href="https://unetbootin.github.io/" class="btn btn-secondary" target="_blank">Download</a>
                <div class="tool-info">
                    <span class="ms-Icon ms-Icon--FilePDB"></span> ~5MB | 
                    <span class="ms-Icon ms-Icon--WindowsLogo"></span> Windows/macOS/Linux
                </div>
            </div>
        </div>
    </div>
</div>

<!-- BIOS/UEFI Configuration Section -->
<section class="bios-config">
    <h2>BIOS/UEFI Configuration</h2>
    
    <div class="bios-comparison">
        <div class="bios-type">
            <h3>Legacy BIOS</h3>
            <ul>
                <li>Older firmware interface</li>
                <li>Uses MBR partition scheme</li>
                <li>Slower boot times</li>
                <li>Limited to 4 primary partitions</li>
                <li>Maximum disk size: 2TB</li>
            </ul>
        </div>
        
        <div class="bios-type">
            <h3>UEFI</h3>
            <ul>
                <li>Modern firmware interface</li>
                <li>Uses GPT partition scheme</li>
                <li>Faster boot times</li>
                <li>Supports Secure Boot</li>
                <li>Supports disks >2TB</li>
                <li>Required for Windows 11</li>
            </ul>
        </div>
    </div>
    
    <div class="bios-steps">
        <h3>How to Access BIOS/UEFI:</h3>
        <ol>
            <li>Restart your computer</li>
            <li>Press the appropriate key during startup (common keys: F2, F10, F12, Del, or Esc)</li>
            <li>Navigate to the Boot or Startup tab</li>
            <li>Enable UEFI mode and disable Legacy/CSM if available</li>
            <li>Save changes and exit</li>
        </ol>
    </div>
</section>

<!-- Troubleshooting Section -->
<section class="troubleshooting">
    <h2>Troubleshooting Common Issues</h2>
    
    <div class="troubleshooting-grid">
        <div class="troubleshooting-card">
            <h3>USB Not Detected</h3>
            <ul>
                <li>Try a different USB port (preferably USB 2.0)</li>
                <li>Test the USB drive on another computer</li>
                <li>Reformat the USB drive using Disk Management</li>
            </ul>
        </div>
        
        <div class="troubleshooting-card">
            <h3>Boot Device Not Found</h3>
            <ul>
                <li>Check boot order in BIOS/UEFI</li>
                <li>Disable Secure Boot if needed</li>
                <li>Ensure USB is formatted as FAT32 for UEFI boot</li>
            </ul>
        </div>
        
        <div class="troubleshooting-card">
            <h3>Installation Fails</h3>
            <ul>
                <li>Verify ISO file integrity (check checksum)</li>
                <li>Try a different USB creation tool</li>
                <li>Check for disk errors on the target drive</li>
            </ul>
        </div>
        
        <div class="troubleshooting-card">
            <h3>Slow Performance</h3>
            <ul>
                <li>Use a USB 3.0+ port and drive</li>
                <li>Close unnecessary applications during creation</li>
                <li>Check for malware or system resource hogs</li>
            </ul>
        </div>
    </div>
</section>

<!-- Next Steps -->
<section class="next-steps">
    <h2>What's Next?</h2>
    <p>Now that you've created your bootable USB drive, you're ready to install Windows 11.</p>
    
    <div class="next-steps-grid">
        <a href="/installation/clean-install/" class="next-step-card">
            <div class="step-icon">
                <span class="ms-Icon ms-Icon--Installation" aria-hidden="true"></span>
            </div>
            <h4>Clean Installation Guide</h4>
            <p>Step-by-step instructions for installing Windows 11</p>
        </a>
        
        <a href="/troubleshooting/installation-issues/" class="next-step-card">
            <div class="step-icon">
                <span class="ms-Icon ms-Icon--Repair" aria-hidden="true"></span>
            </div>
            <h4>Troubleshoot Installation</h4>
            <p>Fix common Windows 11 installation issues</p>
        </a>
        
        <a href="/post-installation/" class="next-step-card">
            <div class="step-icon">
                <span class="ms-Icon ms-Icon--Settings" aria-hidden="true"></span>
            </div>
            <h4>Post-Installation Setup</h4>
            <p>Essential steps after installing Windows 11</p>
        </a>
    </div>
</section>

<link rel="stylesheet" href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css">
<style>
/* Base Styles */
:root {
    --primary-color: #0078D4;
    --accent-color: #107C10;
    --warning-color: #FFB900;
    --critical-color: #D83B01;
    --success-color: #107C10;
    --info-color: #50E6FF;
    --text-primary: #323130;
    --text-secondary: #605E5C;
    --background: #FFFFFF;
    --surface: #F3F2F1;
    --border: #E1DFDD;
    --card-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Intro Section */
.usb-intro {
    background: var(--surface);
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    border-left: 4px solid var(--primary-color);
}

.usb-intro p {
    margin: 0 0 1rem 0;
    font-size: 1.1rem;
}

.system-requirements {
    background: rgba(0, 0, 0, 0.02);
    border-radius: 6px;
    padding: 1rem;
    margin-top: 1rem;
}

.system-requirements h4 {
    margin-top: 0;
    color: var(--text-primary);
}

.system-requirements ul {
    margin: 0.5rem 0 0 1.5rem;
    padding: 0;
}

/* Tabs */
.tabs {
    margin: 2rem 0;
}

.tab-buttons {
    display: flex;
    border-bottom: 1px solid var(--border);
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
}

.tab-button {
    padding: 0.75rem 1.5rem;
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s ease;
}

.tab-button:hover {
    color: var(--primary-color);
    background-color: rgba(0, 0, 0, 0.02);
}

.tab-button.active {
    color: var(--primary-color);
    border-bottom-color: var(--primary-color);
}

.tab-content {
    display: none;
    animation: fadeIn 0.3s ease;
}

.tab-content.active {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Method Header */
.method-header {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
}

.method-header h2 {
    margin-top: 0;
    color: var(--primary-color);
}

.download-info {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
}

.file-info, .os-requirements {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid transparent;
    font-size: 1rem;
    margin: 0.5rem 0;
}

.btn-primary {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
}

.btn-primary:hover {
    background-color: #106EBE;
    border-color: #106EBE;
    color: white;
    text-decoration: none;
}

.btn-secondary {
    background-color: white;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
}

.btn-secondary:hover {
    background-color: #F3F2F1;
    text-decoration: none;
}

.btn .ms-Icon {
    margin-right: 0.5rem;
}

/* Step by Step */
.step-by-step {
    margin: 2rem 0;
    counter-reset: step-counter;
}

.step {
    display: flex;
    margin-bottom: 2.5rem;
    counter-increment: step-counter;
    position: relative;
}

.step-number {
    width: 32px;
    height: 32px;
    background-color: var(--primary-color);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    flex-shrink: 0;
    margin-right: 1.5rem;
    position: relative;
    z-index: 1;
}

.step:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 16px;
    top: 32px;
    bottom: -2.5rem;
    width: 2px;
    background-color: var(--border);
}

.step-content {
    flex: 1;
    padding-bottom: 1.5rem;
}

.step-content h3 {
    margin-top: 0.25rem;
    color: var(--text-primary);
}

/* Alerts */
.alert {
    display: flex;
    padding: 1rem;
    border-radius: 6px;
    margin: 1.5rem 0;
    align-items: flex-start;
    border-left: 4px solid transparent;
}

.alert .ms-Icon {
    margin-right: 0.75rem;
    font-size: 1.25rem;
    flex-shrink: 0;
    margin-top: 0.1rem;
}

.alert.warning {
    background-color: rgba(255, 185, 0, 0.1);
    border-left-color: var(--warning-color);
}

.alert.warning .ms-Icon {
    color: var(--warning-color);
}

.alert.critical {
    background-color: rgba(216, 59, 1, 0.1);
    border-left-color: var(--critical-color);
}

.alert.critical .ms-Icon {
    color: var(--critical-color);
}

.alert.success {
    background-color: rgba(16, 124, 16, 0.1);
    border-left-color: var(--success-color);
}

.alert.success .ms-Icon {
    color: var(--success-color);
}

.alert.info {
    background-color: rgba(80, 230, 255, 0.1);
    border-left-color: var(--info-color);
}

.alert.info .ms-Icon {
    color: var(--info-color);
}

/* Screenshot Placeholder */
.screenshot-placeholder {
    background-color: #f5f5f5;
    border: 1px dashed #ccc;
    border-radius: 6px;
    padding: 2rem;
    text-align: center;
    margin: 1.5rem 0;
    color: var(--text-secondary);
    position: relative;
}

.placeholder-content {
    background-color: #e9e9e9;
    padding: 3rem 1rem;
    border-radius: 4px;
    font-style: italic;
}

.caption {
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-top: 0.5rem;
    text-align: center;
}

/* Third-party Tools */
.tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}

.tool-card {
    background: white;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1.5rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.tool-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tool-card h3 {
    margin-top: 0;
    color: var(--primary-color);
}

.tool-card p {
    margin: 0.75rem 0 1.5rem;
    color: var(--text-secondary);
}

.tool-info {
    font-size: 0.85rem;
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
}

.tool-info .ms-Icon {
    font-size: 1rem;
}

/* BIOS/UEFI Section */
.bios-config {
    margin: 4rem 0;
    padding: 2rem 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.bios-config h2 {
    color: var(--primary-color);
    margin-top: 0;
}

.bios-comparison {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.bios-type {
    background: white;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1.5rem;
}

.bios-type h3 {
    margin-top: 0;
    color: var(--primary-color);
    border-bottom: 1px solid var(--border);
    padding-bottom: 0.75rem;
    margin-bottom: 1rem;
}

.bios-type ul {
    margin: 0.5rem 0 0 1.25rem;
    padding: 0;
}

.bios-type li {
    margin-bottom: 0.5rem;
}

.bios-steps {
    margin-top: 2rem;
    background: var(--surface);
    padding: 1.5rem;
    border-radius: 8px;
}

.bios-steps h3 {
    margin-top: 0;
}

.bios-steps ol {
    margin: 0.5rem 0 0 1.5rem;
    padding: 0;
}

/* Troubleshooting Section */
.troubleshooting {
    margin: 4rem 0;
}

.troubleshooting h2 {
    color: var(--primary-color);
    margin-top: 0;
}

.troubleshooting-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.troubleshooting-card {
    background: white;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 1.5rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.troubleshooting-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.troubleshooting-card h3 {
    margin-top: 0;
    color: var(--primary-color);
    display: flex;
    align-items: center;
}

.troubleshooting-card h3 .ms-Icon {
    margin-right: 0.5rem;
    color: var(--warning-color);
}

.troubleshooting-card ul {
    margin: 0.75rem 0 0 1.25rem;
    padding: 0;
}

.troubleshooting-card li {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
}

/* Next Steps */
.next-steps {
    margin: 4rem 0 2rem;
    padding: 2rem;
    background: var(--surface);
    border-radius: 8px;
    text-align: center;
}

.next-steps h2 {
    margin-top: 0;
    color: var(--primary-color);
}

.next-steps p {
    margin: 0 0 1.5rem;
    font-size: 1.1rem;
}

.next-steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.next-step-card {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid var(--border);
}

.next-step-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-decoration: none;
}

.next-step-card .step-icon {
    width: 60px;
    height: 60px;
    background: rgba(0, 120, 212, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
}

.next-step-card .ms-Icon {
    font-size: 28px;
    color: var(--primary-color);
}

.next-step-card h4 {
    margin: 0 0 0.5rem 0;
    color: var(--primary-color);
    font-size: 1.2rem;
}

.next-step-card p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 0.95rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .next-steps-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .tab-buttons {
        flex-direction: column;
        border-bottom: none;
    }
    
    .tab-button {
        border-bottom: none;
        border-left: 3px solid transparent;
        justify-content: flex-start;
    }
    
    .tab-button.active {
        border-bottom: none;
        border-left: 3px solid var(--primary-color);
    }
    
    .step {
        flex-direction: column;
    }
    
    .step-number {
        margin-bottom: 1rem;
        margin-left: 0;
    }
    
    .step:not(:last-child)::after {
        display: none;
    }
    
    .next-steps-grid {
        grid-template-columns: 1fr;
    }
    
    .tools-grid {
        grid-template-columns: 1fr;
    }
    
    .bios-comparison {
        grid-template-columns: 1fr;
    }
    
    .troubleshooting-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .download-info {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
    }
    
    .usb-intro, .bios-steps {
        padding: 1.25rem;
    }
    
    .next-steps {
        padding: 1.5rem 1rem;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Set first tab as active by default
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }
    
    // Add copy functionality to code blocks
    document.querySelectorAll('pre').forEach((pre) => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.innerHTML = '<span class="ms-Icon ms-Icon--Copy" aria-hidden="true"></span> Copy';
        
        const div = document.createElement('div');
        div.className = 'code-header';
        div.appendChild(document.createElement('span')).textContent = 'Code';
        div.appendChild(button);
        
        pre.parentNode.insertBefore(div, pre);
        
        button.addEventListener('click', () => {
            const code = pre.textContent;
            navigator.clipboard.writeText(code).then(() => {
                button.innerHTML = '<span class="ms-Icon ms-Icon--CheckMark" aria-hidden="true"></span> Copied!';
                setTimeout(() => {
                    button.innerHTML = '<span class="ms-Icon ms-Icon--Copy" aria-hidden="true"></span> Copy';
                }, 2000);
            });
        });
    });
});
</script>
