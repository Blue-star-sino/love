const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
const img = document.querySelector('.img img');
const pText = document.querySelector('p');
const container = document.querySelector(".container");

let yesScale = 1;
let noScale = 1;

noBtn.addEventListener('click', () => {
    yesScale += 0.3;
    noScale = Math.max(noScale - 0.15, 0.3);

    yesBtn.style.transform = `scale(${yesScale})`;
    yesBtn.style.transition = 'transform 0.3s ease';

    if (noScale <= 0.3) {
        noBtn.remove();
        return;
    }

    noBtn.style.transform = `scale(${noScale})`;
    noBtn.style.transition = 'transform 0.3s ease';
});

yesBtn.addEventListener('click', () => {

    // ==== Contract form ======
    const form = document.createElement("form");

    const title = document.createElement("h2");
    title.textContent = "💖Contract💖";
    title.style.textAlign = "center";
    title.style.padding = "10px";

    const userName = document.createElement("input");
    userName.type = "text";
    userName.placeholder = "Enter your name...";

    const fatherName = document.createElement("input");
    fatherName.type = "text";
    fatherName.placeholder = "Enter your father name...";

    const motherName = document.createElement("input");
    motherName.type = "text";
    motherName.placeholder = "Enter your Mother name...";

    const date = document.createElement("input");
    date.type = "date";

    const btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Submit";
    btnSubmit.style.display = "block";
    btnSubmit.style.width = '270px';
    btnSubmit.style.padding = '10px';
    btnSubmit.style.borderRadius = '8px';
    btnSubmit.style.margin = '15px auto';
    btnSubmit.style.border = 'none';
    btnSubmit.style.fontWeight = 'bold';

    form.appendChild(title);
    form.appendChild(userName);
    form.appendChild(fatherName);
    form.appendChild(motherName);
    form.appendChild(date);
    form.appendChild(btnSubmit);

    form.style.backgroundColor = "lightBlue";
    form.style.width = '320px';
    form.style.borderRadius = '10px';
    form.style.padding = '20px';
    form.style.margin = '20px auto';

    container.appendChild(form);

    btnSubmit.addEventListener("click", function(events){
        events.preventDefault();
        const message = document.createElement("p");
        message.textContent = `You say : ${userName.value} on ${date.value} and lie is dog`;

        message.style.fontSize = '2rem';
        message.style.color = 'white';
        message.style.textAlign = 'center';
        message.style.width = '100%';
        message.style.wordWrap = 'break-word';
        message.style.maxWidth = '90%';
        message.style.margin = '20px auto';

        container.appendChild(message);
        img.remove();
        form.remove();
        pText.remove();
    });

    // ========================================================================

    img.src = 'https://skyryedesign.com/wp-content/uploads/2024/10/981081100068637201-pin-image.jpg';
    img.style.width = '90%';
    img.style.maxWidth = '400px';
    img.style.borderRadius = '20px';
    img.style.transition = 'all 0.5s ease';
    img.style.boxShadow = '0 0 40px rgba(255, 0, 100, 0.7)';

    pText.textContent = 'I love you too! ❤️';
    pText.style.fontSize = '30px';
    pText.style.color = '#ff4d79';
    pText.style.animation = 'pulse 1s infinite';

    yesBtn.remove();
    noBtn.remove();

    // add keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.15); }
        }
        @keyframes fall {
            0%   { transform: translateY(-50px) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        .heart {
            position: fixed;
            top: -50px;
            font-size: 28px;
            animation: fall linear forwards;
            pointer-events: none;
            z-index: 999;
        }
    `;
    document.head.appendChild(style);

    // falling hearts
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 10000);
    }, 250);
});