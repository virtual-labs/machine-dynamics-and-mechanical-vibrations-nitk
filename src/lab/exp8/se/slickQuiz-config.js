// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Self Evaluation",
        "main":    "<p></p>",
        "results": "<p style='font-size:20px'><a href='index.html'><u>Click here</u></a> to go to simulation</p>",
        "level1":  "Good! You can move on to the simulator right away",
        "level2":  "Make sure to get that one right the next time",
        "level3":  "You did well, but there is still scope of improvement. We suggest another reading of basics before going to simulator",
        "level4":  "May be it is better you improve your understanding a little more before moving on to the simulator",
        "level5":  "We think you should go through the theory once more before using the simulator" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The mass whose vibrations are to be kept minimum is called?",
            "a": [
                {"option": "Primary Mass",      "correct": true},
                {"option": "Secondary Mass",     "correct": false},
                {"option": "Absorber Mass",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer Is : Primary Mass</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Tuned Mass Damper is essentially",
            "a": [
                {"option": "a 2DoF system",               "correct": true},
                {"option": "a Complex pendulum",   "correct": false},
                {"option": "a 1DoF system with extra mass",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : a 2DoF system</p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "When excitation frequency is equal to natural frequency of absorber, the main system amplitude is ?",
            "a": [
                {"option": "zero",           "correct": true},
                {"option": "maximum",                  "correct": false},
                {"option": "half of maximum",  "correct": false},
                {"option": "None of these",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer Is : zero</p>" // no comma here
        },
        { // Question 4
            "q": "TMD system has",
            "a": [
                {"option": "2 Natural Frequencies",    "correct": true},
                {"option": "1 Natural Frequency",     "correct": false},
                {"option": "&infin; Natural Frequencies",      "correct": false},
              {"option": "None of these",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer Is : 2 Natural Frequencies </p>"  // no comma here
        },
        { // Question 5 
            "q": " Without the absorber mass the number of natural frequencies in a TMD is",
            "a": [
                {"option": "1",    "correct": true},
                {"option": "2",     "correct": false},
		 {"option": "0",  "correct": false},
                {"option": "none of these",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer is : 1 </p>"  // no comma here
        }
    ]
};
