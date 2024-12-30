const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
    commands: 'Supported commands: <span class="code">about</span>, <span class="code">skills</span>, <span class="code">education</span>, <span class="code">resume</span>, <span class="code">contact</span>, <span class="code">coding_profiles</span>.',
    about: "Hey! <br>I'm Jayanth Naidu. I'm a Backend Dev who has a knack for coding. I'm currently working as a Software Engineer at <a href='https://www.digitalocean.com/' class='success link '>DigitalOcean</a>",
    skills: '<span class="code">Languages:</span> C/C++, Java & GO.<br><span class="code">Frameworks:</span> SpringBoot <br><span class="code">Databases:</span> MongoDB, MySQL.<br><span class="code">Tools:</span> Bash, Git & GitHub, Windows, Linux.<br><span class="code"> AWS Services:</span> EC2, ECS, EMR, Lambda, DynamoDB, S3 and Redshift',
    education: "Bachelor of Technology — Computer Science, CGPA - 8.50/10 <br>IARE Affiliated to JNTU Hyderabad.",
    contact : "Number - (+91)9493269995, Email - jayanthcse2023@gmail.com",
    resume: "<a href='https://drive.google.com/file/d/1gWEdxVlC-xEI7W6NPrBfj3PV_Xvx6swP/view?usp=sharing' target = '_blank' class='success link'>Click Here for Resume</a>",
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
    // if(userInput.innerHTML.length > 10 && e.key !== "Enter") {
    //     return;
    // }
    const input = userInput.innerHTML;


    // Array of blacklisted key codes or names
    const BLACKLISTED_KEYS = [
        "Alt", "Tab", "CapsLock", "Shift", "Control", "Meta", 
        "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"
    ];

    // Add corresponding keyCodes for compatibility (optional)
    const BLACKLISTED_KEY_CODES = [
        9, 20, 16, 17, 18, 91, // Tab, CapsLock, Shift, Control, Alt, Meta
        112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123 // F1 to F12
    ];

    if (BLACKLISTED_KEYS.includes(e.key) || BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
        console.log(`Ignored key: ${e.key}`);
        return;
    }

    console.log(e.key)

    if (e.key === "Enter" || e.key === 'Return') {
        execute(input);
        userInput.innerHTML = "";
        return;
    }

    if(e.key !== "Backspace" && e.key !== "Delete") {
        userInput.innerHTML = input + e.key;
    }

    console.log(e.key+' '+e.keyCode+" "+userInput.innerHTML);

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
document.addEventListener("keydown", key);
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting
// for stylesheets, images, and subframes to finish loading.
document.addEventListener("DOMContentLoaded", app);
