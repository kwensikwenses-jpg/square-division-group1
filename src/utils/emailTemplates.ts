// src/utils/emailTemplates.ts

export const RECOVERY_EMAIL_TEMPLATE = (overrideUrl: string) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Courier New', monospace; background-color: #edeae7; padding: 40px; }
        .container { 
            max-width: 600px; background: white; border: 4px solid #000; 
            box-shadow: 20px 20px 0px #ff0000; padding: 40px; 
        }
        .header { background: #000; color: #fff; padding: 20px; text-transform: uppercase; font-weight: 900; }
        .node-id { font-size: 10px; opacity: 0.6; margin-bottom: 20px; }
        .alert-box { border: 2px solid #000; padding: 20px; background: #fff1f1; margin: 20px 0; }
        .btn { 
            display: inline-block; background: #000; color: #fff; padding: 20px 40px; 
            text-decoration: none; font-weight: 900; text-transform: uppercase; margin-top: 20px; 
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Security Protocol: Node Lockdown</div>
        <p class="node-id">Packet_ID: RECOVERY_NODE_772</p>
        <p><strong>ATTENTION:</strong> Multiple unauthorized access attempts detected on your node.</p>
        
        <div class="alert-box">
            <p style="margin:0; font-size: 12px; font-weight: bold;">Manual Override Required.</p>
            <p style="font-size: 11px;">A secure override link has been generated to synchronize your credentials.</p>
        </div>

        <a href="${overrideUrl}" class="btn">Authorize_Override →</a>
        
        <p style="font-size: 10px; margin-top: 40px; opacity: 0.5;">
            If you did not authorize this, contact support immediately.
        </p>
    </div>
</body>
</html>
`;