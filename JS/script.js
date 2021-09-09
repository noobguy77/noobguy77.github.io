const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
    commands: 'Supported commands: <span class="code">about</span>, <span class="code">skills</span>, <span class="code">education</span>, <span class="code">resume</span>, <span class="code">contact</span>, <span class="code">coding_profiles</span>.',
    about: "Hey! <br>I'm Jayanth Naidu. I'm a CS Undergrad from IARE who has a knack for coding.",
    skills: '<span class="code">Languages:</span> C/C++, Python3, Java, JavaScript.<br><span class="code">Frameworks:</span> Node.js, Express.<br><span class="code">Databases:</span> MongoDB, Firebase, MySQL.<br><span class="code">Tools:</span> Bash, Git & GitHub, Windows, Linux.',
    education: "Bachelor of Technology — Computer Science,<br>Institute Of Aeronautical Engineering, Hyderabad.",
    resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
    coding_profiles: "Codechef : <a href='https://codechef.com/users/noobguy77' class='success link '>noobguy77</a> <br>Codeforces : <a href='https://codeforces.com/profile/noobguy77' class='success link '>noobguy77</a>",
    contact: "Email: <a href='mailto:impmailonly7@gmail.com' class='success link'>impmailonly7@gmail.com</a> <br>LinkedIn : <a href='https://www.linkedin.com/in/jayanth-naidu-b03308186/' class='success link'>LinkedIn</a>",
};
var userInput, terminalOutput;

const app = () => {
    userInput = document.getElementById("userInput");
    terminalOutput = document.getElementById("terminalOutput");
    document.getElementById("dummyKeyboard").focus();
    console.log("Application loaded");
};


const execute = (input) => {
    let output;
    input = input.toLowerCase();
    if (input.length === 0) {
        return;
    }
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line">no such command: ${input}</div>`;
        console.log("Oops! no such command");
    } else {
        output += COMMANDS[input];
    }

    terminalOutput.innerHTML = `${	
    terminalOutput.innerHTML	
    }<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = (e) => {
    const input = userInput.innerHTML;

    if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
        return;
    }

    if (e.key === "Enter" || e.key === 'Return') {
        execute(input);
        userInput.innerHTML = "";
        return;
    }

    userInput.innerHTML = input + e.key;
};

const backspace = (e) => {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
        return;
    }
    userInput.innerHTML = userInput.innerHTML.slice(
        0,
        userInput.innerHTML.length - 1
    );
};

document.addEventListener("keydown", backspace);
// The keypress event is fired when a key that produces a character value is pressed down.
document.addEventListener("keypress", key);
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting
// for stylesheets, images, and subframes to finish loading.
document.addEventListener("DOMContentLoaded", app);