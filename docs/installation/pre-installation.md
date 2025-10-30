# Pre-Installation Planning

<div class="pre-install-intro">
    <p>Careful planning before installing Windows 11 ensures a smooth transition and helps avoid common pitfalls. This guide will help you prepare your system and gather everything you need before beginning the installation process.</p>
</div>

## Pre-Installation Checklist

<div class="checklist-container">
    <div class="checklist-item">
        <input type="checkbox" id="check1" class="checklist-checkbox">
        <label for="check1" class="checklist-label">
            <span class="checkmark"></span>
            <span class="checklist-title">Check System Requirements</span>
        </label>
        <div class="checklist-content">
            <p>Verify your device meets the minimum requirements for Windows 11. Pay special attention to:</p>
            <ul>
                <li>Processor: 1 GHz or faster with 2 or more cores</li>
                <li>RAM: 4GB (8GB recommended)</li>
                <li>Storage: 64GB or larger storage device</li>
                <li>System firmware: UEFI, Secure Boot capable</li>
                <li>TPM: Version 2.0</li>
                <li>Graphics card: DirectX 12 compatible / WDDM 2.x</li>
                <li>Display: >9" with HD Resolution (720p)</li>
            </ul>
            <div class="system-reqs-card">
                <h4>System Requirements Comparison</h4>
                <table class="requirements-table">
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Minimum</th>
                            <th>Recommended</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Processor</td>
                            <td>1 GHz, 2+ cores</td>
                            <td>2 GHz, 4+ cores</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>4GB</td>
                            <td>8GB+</td>
                        </tr>
                        <tr>
                            <td>Storage</td>
                            <td>64GB</td>
                            <td>256GB+ SSD</td>
                        </tr>
                        <tr>
                            <td>Graphics</td>
                            <td>DirectX 12 / WDDM 2.x</td>
                            <td>DirectX 12 Ultimate</td>
                        </tr>
                        <tr>
                            <td>Display</td>
                            <td>720p, >9"</td>
                            <td>1080p or higher</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="checklist-item">
        <input type="checkbox" id="check2" class="checklist-checkbox">
        <label for="check2" class="checklist-label">
            <span class="checkmark"></span>
            <span class="checklist-title">Backup Your Data</span>
        </label>
        <div class="checklist-content">
            <div class="alert critical">
                <span class="alert-icon">⚠️</span>
                <div class="alert-content">
                    <strong>Critical:</strong> Backing up your data is essential before proceeding with installation. A clean install will erase all data on the target drive.
                </div>
            </div>
            
            <h4>What to Back Up:</h4>
            <ul>
                <li>Personal files (documents, photos, videos, music)</li>
                <li>Browser bookmarks and saved passwords</li>
                <li>Application settings and license keys</li>
                <li>Email messages and contacts</li>
                <li>Game saves and profiles</li>
            </ul>
            
            <div class="backup-methods">
                <div class="backup-option">
                    <h5>Cloud Storage</h5>
                    <p>Services like OneDrive, Google Drive, or Dropbox</p>
                    <ul>
                        <li>Pros: Accessible from anywhere, automatic syncing</li>
                        <li>Cons: Limited free storage, requires internet</li>
                    </ul>
                </div>
                
                <div class="backup-option">
                    <h5>External Drive</h5>
                    <p>USB drive or external hard disk</p>
                    <ul>
                        <li>Pros: Fast, no internet required, one-time cost</li>
                        <li>Cons: Can be lost or damaged, manual process</li>
                    </ul>
                </div>
                
                <div class="backup-option">
                    <h5>System Image</h5>
                    <p>Complete system backup</p>
                    <ul>
                        <li>Pros: Full system restore capability</li>
                        <li>Cons: Large file size, requires significant storage</li>
                    </ul>
                </div>
            </div>
            
            <div class="alert warning">
                <span class="alert-icon">⚠️</span>
                <div class="alert-content">
                    <strong>Verify your backup:</strong> After creating backups, verify that you can access and restore your files before proceeding with the installation.
                </div>
            </div>
        </div>
    </div>

    <div class="checklist-item">
        <input type="checkbox" id="check3" class="checklist-checkbox">
        <label for="check3" class="checklist-label">
            <span class="checkmark"></span>
            <span class="checklist-title">Choose Windows 11 Edition</span>
        </label>
        <div class="checklist-content">
            <p>Select the right edition of Windows 11 for your needs. The main differences are:</p>
            
            <div class="edition-comparison">
                <div class="edition">
                    <h4>Windows 11 Home</h4>
                    <ul>
                        <li>For home users</li>
                        <li>Microsoft account required</li>
                        <li>Basic security features</li>
                        <li>Xbox Game Pass for PC</li>
                    </ul>
                </div>
                
                <div class="edition">
                    <h4>Windows 11 Pro</h4>
                    <ul>
                        <li>For professionals and businesses</li>
                        <li>Local account option</li>
                        <li>BitLocker encryption</li>
                        <li>Hyper-V virtualization</li>
                        <li>Group Policy management</li>
                    </ul>
                </div>
                
                <div class="edition">
                    <h4>Windows 11 Enterprise</h4>
                    <ul>
                        <li>For large organizations</li>
                        <li>Advanced security features</li>
                        <li>Windows Update for Business</li>
                        <li>AppLocker</n                    </ul>
                </div>
            </div>
            
            <div class="pro-tip">
                <span class="icon">💡</span>
                <div>
                    <strong>Pro Tip:</strong> If you're unsure which edition to choose, Windows 11 Home is sufficient for most home users. Upgrade to Pro if you need business features or more control over updates.
                </div>
            </div>
        </div>
    </div>

    <div class="checklist-item">
        <input type="checkbox" id="check4" class="checklist-checkbox">
        <label for="check4" class="checklist-label">
            <span class="checkmark"></span>
            <span class="checklist-title">Gather Drivers & Software Keys</span>
        </label>
        <div class="checklist-content">
            <p>Before installation, make sure you have all necessary drivers and software keys:</p>
            
            <h4>Essential Drivers to Download:</h4>
            <ul>
                <li>Network adapter (Ethernet/WiFi)</li>
                <li>Graphics card (NVIDIA/AMD/Intel)</n                <li>Audio</li>
                <li>Chipset</li>
                <li>Storage controllers</li>
                <li>Peripheral devices (printers, scanners, etc.)</li>
            </ul>
            
            <h4>Software License Keys:</h4>
            <p>Gather keys for:</p>
            <ul>
                <li>Microsoft Office</li>
                <li>Antivirus software</li>
                <li>Paid applications</li>
                <li>Gaming platforms (Steam, Origin, etc.)</li>
            </ul>
            
            <div class="alert warning">
                <span class="alert-icon">⚠️</span>
                <div class="alert-content">
                    <strong>Download drivers in advance:</strong> Some network adapters may not work out of the box. Download network drivers on another device in case you need them during installation.
                </div>
            </div>
            
            <div class="driver-sources">
                <h4>Driver Download Sources:</h4>
                <ul>
                    <li><strong>Manufacturer's website:</strong> Always the best source for the latest drivers</li>
                    <li><strong>Windows Update:</strong> Automatically installs many common drivers</li>
                    <li><strong>Motherboard support page:</strong> For chipset, audio, and other onboard components</li>
                </ul>
            </div>
        </div>
    </div>
</div>

## Next Steps

<div class="next-steps">
    <p>Once you've completed the pre-installation checklist, you're ready to proceed with the Windows 11 installation:</p>
    
    <div class="next-steps-grid">
        <a href="/installation/create-bootable-usb/" class="next-step-card">
            <div class="step-icon">
                <span class="ms-Icon ms-Icon--USB" aria-hidden="true"></span>
            </div>
            <h4>Create Bootable USB</h4>
            <p>Prepare your installation media</p>
        </a>
        
        <a href="/installation/clean-install/" class="next-step-card">
            <div class="step-icon">
                <span class="ms-Icon ms-Icon--Installation" aria-hidden="true"></span>
            </div>
            <h4>Clean Installation Guide</h4>
            <p>Step-by-step installation instructions</p>
        </a>
    </div>
</div>

<style>
/* Base Styles */
:root {
    --primary-color: #0078D4;
    --warning-color: #FFB900;
    --critical-color: #D83B01;
    --success-color: #107C10;
    --text-primary: #323130;
    --text-secondary: #605E5C;
    --background: #FFFFFF;
    --surface: #F3F2F1;
    --border: #E1DFDD;
    --pro-tip-bg: #E5F1FB;
    --warning-bg: #FFF4CE;
    --critical-bg: #FDF0EF;
}

.pre-install-intro {
    background: var(--surface);
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    border-left: 4px solid var(--primary-color);
}

.pre-install-intro p {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.6;
}

/* Checklist Styles */
.checklist-container {
    margin: 2rem 0;
}

.checklist-item {
    margin-bottom: 1rem;
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
}

.checklist-checkbox {
    display: none;
}

.checklist-label {
    display: flex;
    align-items: center;
    padding: 1.25rem 1.5rem;
    background: var(--surface);
    cursor: pointer;
    font-weight: 600;
    transition: background 0.2s ease;
}

.checklist-label:hover {
    background: #f8f8f8;
}

.checkmark {
    width: 20px;
    height: 20px;
    border: 2px solid var(--text-secondary);
    border-radius: 4px;
    margin-right: 1rem;
    position: relative;
    flex-shrink: 0;
}

.checklist-checkbox:checked + .checklist-label .checkmark {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
}

.checklist-checkbox:checked + .checklist-label .checkmark::after {
    content: '✓';
    position: absolute;
    color: white;
    font-size: 14px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.checklist-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    padding: 0 1.5rem;
    background: white;
}

.checklist-checkbox:checked + .checklist-label + .checklist-content {
    max-height: 3000px; /* Adjust based on content */
    padding: 0 1.5rem 1.5rem;
    border-top: 1px solid var(--border);
}

/* System Requirements Card */
.system-reqs-card {
    background: #f8f9fa;
    border-radius: 6px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border: 1px solid var(--border);
}

.requirements-table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
}

.requirements-table th,
.requirements-table td {
    padding: 0.75rem;
    text-align: left;
    border: 1px solid var(--border);
}

.requirements-table th {
    background-color: var(--primary-color);
    color: white;
    font-weight: 500;
}

.requirements-table tr:nth-child(even) {
    background-color: #f8f9fa;
}

/* Alert Boxes */
.alert {
    display: flex;
    padding: 1rem;
    border-radius: 6px;
    margin: 1.5rem 0;
    align-items: flex-start;
}

.alert.warning {
    background-color: var(--warning-bg);
    border-left: 4px solid var(--warning-color);
}

.alert.critical {
    background-color: var(--critical-bg);
    border-left: 4px solid var(--critical-color);
}

.alert-icon {
    font-size: 1.5rem;
    margin-right: 0.75rem;
    flex-shrink: 0;
}

.alert.warning .alert-icon {
    color: var(--warning-color);
}

.alert.critical .alert-icon {
    color: var(--critical-color);
}

.alert-content {
    flex: 1;
}

.alert-content strong {
    display: block;
    margin-bottom: 0.25rem;
}

/* Backup Methods */
.backup-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 1.5rem 0;
}

.backup-option {
    background: white;
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 1.25rem;
}

.backup-option h5 {
    margin-top: 0;
    color: var(--primary-color);
    border-bottom: 1px solid var(--border);
    padding-bottom: 0.5rem;
}

/* Edition Comparison */
.edition-comparison {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 1.5rem 0;
}

.edition {
    background: white;
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 1.25rem;
}

.edition h4 {
    margin-top: 0;
    color: var(--primary-color);
    border-bottom: 1px solid var(--border);
    padding-bottom: 0.5rem;
}

/* Next Steps */
.next-steps {
    margin: 3rem 0;
    padding: 2rem;
    background: var(--surface);
    border-radius: 8px;
    text-align: center;
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

/* Pro Tip */
.pro-tip {
    background-color: var(--pro-tip-bg);
    border-left: 4px solid var(--primary-color);
    padding: 1rem;
    border-radius: 4px;
    margin: 1.5rem 0;
    display: flex;
    align-items: flex-start;
}

.pro-tip .icon {
    font-size: 1.5rem;
    margin-right: 0.75rem;
    color: var(--primary-color);
}

/* Responsive Design */
@media (max-width: 768px) {
    .backup-methods,
    .edition-comparison {
        grid-template-columns: 1fr;
    }
    
    .next-steps-grid {
        grid-template-columns: 1fr;
    }
    
    .checklist-label {
        padding: 1rem;
    }
    
    .checklist-content {
        padding: 0 1rem 1rem;
    }
    
    .system-reqs-card {
        padding: 1rem;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Toggle checklist items
    const checkboxes = document.querySelectorAll('.checklist-checkbox');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const content = this.nextElementSibling.nextElementSibling;
            if (this.checked) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });
    });
    
    // Initialize all checkboxes as unchecked
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
});
</script>
