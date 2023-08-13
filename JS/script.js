const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
    commands: 'Supported commands: <span class="code">about</span>,<span class="code">experience</span>, <span class="code">skills</span>, <span class="code">education</span>, <span class="code">resume</span>, <span class="code">contact</span>, <span class="code">coding_profiles</span>.',
    about: "Hey! <br>I'm Jayanth Naidu. I'm a CS Undergrad '23 who has a knack for coding.",
    experience: "Currenly working as a Product Engineer at <a href='https://lji.io' class='success link '>Loyalty Juggernaut</a>",
    skills: '<span class="code">Languages:</span> C/C++, Python3, Java, JavaScript.<br><span class="code">Frameworks:</span> SpringBoot, Express.js<br><span class="code">Databases:</span> MongoDB, MySQL.<br><span class="code">Tools:</span> Bash, Git & GitHub, Windows, Linux.<br><span class="code"> AWS Services:</span> EC2, Lambda, DynamoDB, S3 and Redshift',
    education: "Bachelor of Technology — Computer Science, CGPA - 8.50/10 <br>IARE Affiliated to JNTU Hyderabad.",
    contact : "Number - (+91)9493269995, Email - impmailonly7@gmail.com",
    resume: "<a href='https://drive.google.com/file/d/18QNFq-TfvGLKcYEKPSZk3RJEJI87tu6t/view?usp=sharing' target = '_blank' class='success link'>Click Here for Resume</a>",
    coding_profiles: "GitHub :  <a href='https://github.com/noobguy77' class='success link '>noobguy77</a> <br>LeetCode : <a href='https://leetcode.com/noobguy77/' class='success link '>noobguy77</a> <br>Codechef : <a href='https://codechef.com/users/noobguy77' class='success link'>noobguy77</a> <br>Codeforces : <a href='https://codeforces.com/profile/noobguy77' class='success link '>noobguy77</a> "
};
var userInput, terminalOutput;

const app = () => {
    userInput = document.getElementById("userInput");
    terminalOutput = document.getElementById("terminalOutput");
    document.getElementById("dummyKeyboard").focus();
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
