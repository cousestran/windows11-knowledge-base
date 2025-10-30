# System Requirements & Compatibility Check

<div class="compatibility-intro">
    <p>Before installing Windows 11, it's crucial to verify that your device meets the minimum system requirements. This guide will help you check your system's compatibility and provide solutions for common issues.</p>
</div>

## Windows 11 System Requirements

<div class="requirements-card">
    <table class="requirements-table">
        <thead>
            <tr>
                <th>Component</th>
                <th>Minimum Requirement</th>
                <th>Recommended</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Processor</td>
                <td>1 GHz or faster with 2+ cores</td>
                <td>2 GHz or faster with 4+ cores</td>
                <td>8th Gen Intel or newer, or AMD Ryzen 2000 series or newer</td>
            </tr>
            <tr>
                <td>RAM</td>
                <td>4 GB</td>
                <td>8 GB or more</td>
                <td>16 GB recommended for optimal performance</td>
            </tr>
            <tr>
                <td>Storage</td>
                <td>64 GB</td>
                <td>256 GB SSD or larger</td>
                <td>SSD highly recommended for better performance</td>
            </tr>
            <tr>
                <td>TPM</td>
                <td>Version 2.0</td>
                <td>Version 2.0</td>
                <td>Trusted Platform Module required</td>
            </tr>
            <tr>
                <td>Secure Boot</td>
                <td>Required</td>
                <td>Required</td>
                <td>Must be enabled in UEFI firmware</td>
            </tr>
            <tr>
                <td>Graphics Card</td>
                <td>DirectX 12 compatible with WDDM 2.0</td>
                <td>DirectX 12 Ultimate compatible</td>
                <td>Integrated or discrete GPU</td>
            </tr>
            <tr>
                <td>Display</td>
                <td>720p, >9" diagonal</td>
                <td>1080p or higher</td>
                <td>8-bit color depth minimum</td>
            </tr>
        </tbody>
    </table>
</div>

## How to Check Your PC's Compatibility

### Method 1: Using PC Health Check Tool

<div class="step-by-step">
    <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
            <h3>Download the PC Health Check Tool</h3>
            <p>Download the official Microsoft PC Health Check tool from the Microsoft website.</p>
            <div class="screenshot-placeholder">
                <div class="placeholder-content">[Screenshot: Microsoft download page]</div>
                <div class="caption">Download PC Health Check from Microsoft's website</div>
            </div>
            <a href="https://aka.ms/GetPCHealthCheckApp" class="btn btn-primary" target="_blank">
                <span class="ms-Icon ms-Icon--Download" aria-hidden="true"></span> Download PC Health Check
            </a>
        </div>
    </div>

    <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
            <h3>Install and Run the Tool</h3>
            <p>Run the installer and follow the on-screen instructions to install the PC Health Check app.</p>
            <div class="screenshot-placeholder">
                <div class="placeholder-content">[Screenshot: PC Health Check installation]</div>
                <div class="caption">Installation wizard for PC Health Check</div>
            </div>
        </div>
    </div>

    <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
            <h3>Check Compatibility</h3>
            <p>Click "Check now" to see if your PC meets Windows 11 requirements.</p>
            <div class="screenshot-placeholder">
                <div class="placeholder-content">[Screenshot: PC Health Check main screen]</div>
                <div class="caption">Click "Check now" to start the compatibility scan</div>
            </div>
        </div>
    </div>

    <div class="step">
        <div class="step-number">4</div>
        <div class="step-content">
            <h3>Review Results</h3>
            <p>The tool will display which requirements your PC meets and which it doesn't.</p>
            <div class="screenshot-placeholder">
                <div class="placeholder-content">[Screenshot: Compatibility results]</div>
                <div class="caption">Example of compatibility check results</div>
            </div>
        </div>
    </div>
</div>

### Method 2: Manual Check

#### Check TPM Version
1. Press `Win + R`, type `tpm.msc` and press Enter
2. Look for "Specification Version" - it should say "2.0"

#### Check Secure Boot Status
1. Press `Win + R`, type `msinfo32` and press Enter
2. Look for "Secure Boot State" - it should say "On"

#### Check CPU Generation
1. Press `Win + R`, type `msinfo32` and press Enter
2. Look for "Processor" and verify the model number

## Troubleshooting Incompatible PCs

<details class="troubleshooting-item">
    <summary>TPM 2.0 Not Found</summary>
    <div class="troubleshooting-content">
        <h4>Possible Solutions:</h4>
        <ol>
            <li><strong>Enable TPM in BIOS/UEFI:</strong>
                <ul>
                    <li>Restart your PC and enter BIOS/UEFI (usually by pressing F2, F10, F12, or Del during boot)</li>
                    <li>Look for TPM/PTT/fTPM settings (varies by manufacturer)</li>
                    <li>Enable TPM and set to version 2.0</li>
                    <li>Save changes and exit</li>
                </ul>
            </li>
            <li><strong>Update BIOS/UEFI:</strong> Check your motherboard manufacturer's website for updates</li>
            <li><strong>Check for TPM Module:</strong> Some older PCs may need a physical TPM module installed</li>
        </ol>
    </div>
</details>

<details class="troubleshooting-item">
    <summary>Secure Boot Not Enabled</summary>
    <div class="troubleshooting-content">
        <h4>How to Enable Secure Boot:</h4>
        <ol>
            <li>Restart your PC and enter BIOS/UEFI</li>
            <li>Navigate to Boot or Security settings</li>
            <li>Find "Secure Boot" and set it to "Enabled"</li>
            <li>If you see "Secure Boot State" as "Unsupported", your PC might not support it</li>
            <li>Save changes and exit</li>
        </ol>
        <p class="note">Note: Some older PCs may not support Secure Boot at all.</p>
    </div>
</details>

<details class="troubleshooting-item">
    <summary>CPU Not Supported</summary>
    <div class="troubleshooting-content">
        <h4>Your Options:</h4>
        <ol>
            <li><strong>Continue with Windows 10:</strong> Microsoft will support Windows 10 until October 2025</li>
            <li><strong>Upgrade Hardware:</strong> Consider upgrading to a newer PC that meets the requirements</li>
            <li><strong>Bypass Requirements:</strong> See the warning below about compatibility bypasses</li>
        </ol>
    </div>
</details>

## ⚠️ Compatibility Bypass Warning

<div class="warning-card critical">
    <div class="warning-header">
        <span class="ms-Icon ms-Icon--Warning" aria-hidden="true"></span>
        <h3>Important Notice About Bypassing Requirements</h3>
    </div>
    <div class="warning-content">
        <p>Microsoft strongly recommends against bypassing the minimum system requirements for Windows 11. Installing Windows 11 on an unsupported PC may result in:</p>
        <ul>
            <li><strong>No Updates:</strong> Your device might not receive critical security and quality updates</li>
            <li><strong>Performance Issues:</strong> The operating system may not run optimally on unsupported hardware</li>
            <li><strong>Stability Problems:</strong> Increased risk of crashes and system instability</li>
            <li><strong>No Warranty:</strong> May void your device's warranty</li>
        </ul>
        <p>If you choose to proceed, you do so at your own risk.</p>
    </div>
</div>

### Registry Bypass Method (Advanced Users Only)

```powershell
# Create a System Restore Point first
Checkpoint-Computer -Description "Before Windows 11 Compatibility Bypass" -RestorePointType MODIFY_SETTINGS

# Create the necessary registry keys
$registryPath = "HKLM:\SYSTEM\Setup\MoSetup"
$name = "AllowUpgradesWithUnsupportedTPMOrCPU"
$value = 1

# Create the key if it doesn't exist
if (!(Test-Path $registryPath)) {
    New-Item -Path $registryPath -Force | Out-Null
}

# Set the registry value
New-ItemProperty -Path $registryPath -Name $name -Value $value -PropertyType DWORD -Force | Out-Null

# Verify the value was set
Get-ItemProperty -Path $registryPath -Name $name
```

### Installation Media Bypass

1. Download the Windows 11 ISO using the [Media Creation Tool](https://www.microsoft.com/software-download/windows11)
2. Mount the ISO and navigate to the `sources` folder
3. Create a new file named `appraiserres.dll`
4. Create an empty file named `$WINDOWS.~BT\sources\appraiserres.dll`
5. Run `setup.exe` from the installation media

## Next Steps

<div class="next-steps">
    <p>Now that you've checked your system's compatibility, you're ready to proceed with the installation:</p>
    
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

        <a href="/troubleshooting/installation-issues/" class="next-step-card">
            <div class="step-icon">
                <span class="ms-Icon ms-Icon--Repair" aria-hidden="true"></span>
            </div>
            <h4>Troubleshoot Installation</h4>
            <p>Common installation issues and solutions</p>
        </a>
    </div>
</div>

<link rel="stylesheet" href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css">
<style>
/* System Requirements & Compatibility Check Styles */
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
}

/* Base Styles */
body {
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
    color: var(--text-primary);
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: var(--background);
}

/* Hero Section */
.compatibility-intro {
    background: var(--surface);
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    border-left: 4px solid var(--primary-color);
}

.compatibility-intro p {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.6;
}

/* Requirements Table */
.requirements-card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin: 2rem 0;
    overflow: hidden;
}

.requirements-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--background);
    border-radius: 8px;
    overflow: hidden;
}

.requirements-table th,
.requirements-table td {
    padding: 1rem;
    text-align: left;
    border: 1px solid var(--border);
}

.requirements-table th {
    background-color: var(--primary-color);
    color: white;
    font-weight: 600;
}

.requirements-table tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.02);
}

.requirements-table tr:hover {
    background-color: rgba(0, 120, 212, 0.05);
}

/* Step-by-Step Guide */
.step-by-step {
    margin: 3rem 0;
    counter-reset: step-counter;
}

.step {
    display: flex;
    margin-bottom: 3rem;
    counter-increment: step-counter;
    position: relative;
}

.step-number {
    width: 36px;
    height: 36px;
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
    left: 18px;
    top: 36px;
    bottom: -3rem;
    width: 2px;
    background-color: var(--border);
}

.step-content {
    flex: 1;
    padding-bottom: 1.5rem;
}

.step-content h3 {
    margin-top: 0.5rem;
    color: var(--primary-color);
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

/* Troubleshooting Section */
.troubleshooting-item {
    margin-bottom: 1rem;
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
}

.troubleshooting-item summary {
    padding: 1rem 1.5rem;
    background-color: var(--surface);
    cursor: pointer;
    font-weight: 600;
    list-style: none;
    position: relative;
    padding-left: 2.5rem;
}

.troubleshooting-item summary::-webkit-details-marker {
    display: none;
}

.troubleshooting-item summary::before {
    content: '+';
    position: absolute;
    left: 1rem;
    font-weight: bold;
    font-size: 1.2rem;
    transition: transform 0.2s ease;
}

.troubleshooting-item[open] summary::before {
    content: '−';
}

.troubleshooting-content {
    padding: 1.5rem;
    background-color: var(--background);
    border-top: 1px solid var(--border);
}

.troubleshooting-content h4 {
    margin-top: 0;
}

/* Warning Card */
.warning-card {
    border-radius: 6px;
    overflow: hidden;
    margin: 2.5rem 0;
    border: 1px solid;
}

.warning-card.critical {
    border-color: var(--critical-color);
}

.warning-card .warning-header {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: rgba(216, 59, 1, 0.1);
    color: var(--critical-color);
    font-weight: 600;
}

.warning-card .warning-header .ms-Icon {
    margin-right: 0.75rem;
    font-size: 1.25rem;
}

.warning-card .warning-content {
    padding: 1.5rem;
    background-color: rgba(216, 59, 1, 0.05);
}

.warning-card ul {
    margin: 0.75rem 0;
    padding-left: 1.5rem;
}

.warning-card li {
    margin-bottom: 0.5rem;
}

/* Code Blocks */
pre {
    background-color: #1E1E1E;
    color: #D4D4D4;
    padding: 1rem;
    border-radius: 6px;
    overflow-x: auto;
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 1.5rem 0;
}

code {
    font-family: 'Consolas', 'Monaco', monospace;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
}

/* Next Steps */
.next-steps {
    margin: 4rem 0 2rem;
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
}

.btn .ms-Icon {
    margin-right: 0.5rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .next-steps-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .compatibility-intro {
        padding: 1.25rem;
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
}

@media (max-width: 480px) {
    .compatibility-intro {
        padding: 1rem;
    }
    
    .requirements-table {
        display: block;
        overflow-x: auto;
        white-space: nowrap;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Add copy button functionality to code blocks
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

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});
</script>
