

        document.getElementById('subscribe-button').addEventListener('click', function() { 
            alert('You subscribed!');
        });

        document.getElementById('message-button').addEventListener('click', function() {
            const contactMethod = prompt("Send a message to Moses. Type 'email' for email or 'whatsapp' for WhatsApp:");

            if (contactMethod.toLowerCase() === 'email') {
                
                const recipient = "moses@example.com";
                const subject = "Hello Moses!";
                const body = "Hi Moses, I'm reaching out to inform you about...";
                const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.location.href = mailtoLink;

            } else if (contactMethod.toLowerCase() === 'whatsapp') {
                
                const phoneNumber = "+256709255496"; 
                const message = "Hi Moses, I'm reaching out to inform you about...";
                const whatsappLink = `https://wa.me/+256709255496${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappLink, '_blank');
                
            } else {
                alert('Invalid option. Please type "email" or "whatsapp".');
            }
        });

        function subscribeToYouTube() {
        
            window.open("https://www.youtube.com/@frugalway-r3t", "_blank");
            
        }


        function shareAction() {
            alert("Share action triggered!");
        
        }

        function likeAction() {
            alert("You liked this!");
        
        }

        function loveAction() {
            alert("You showed love!");
        
        }
