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
            "q": "How many equations are required for describing a 2DoF system?",
            "a": [
                {"option": "2",      "correct": true},
                {"option": "1",     "correct": false},
                {"option": "3",      "correct": false},
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer Is : 2</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "2DoF system does not contain a damper",
            "a": [
                {"option": "false",               "correct": true},
                {"option": "true",   "correct": false}
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span></p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of the following can be modelled as a 2DoF system ?",
            "a": [
                {"option": "Motor Generator System",           "correct": true},
                {"option": "Wave loading in offshore structure",                  "correct": false},
                {"option": "Wind blowing with high velocity over a skyscraper",  "correct": false},
                {"option": "None of these",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer Is : Motor Generator System</p>" // no comma here
        },
        { // Question 4
            "q": "2DoF system has",
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
            "q": " <img src='../images/exp7Q1.png' style='height:auto; width:auto'/><br>The equations above represent ",
            "a": [
                {"option": "Free vibration in 2DOF system without damping ",    "correct": true},
                {"option": "Free vibration in 2DOF system with damping",     "correct": false},
		 {"option": "Forced vibration in 2DOF system without damping",  "correct": false},
                {"option": "Forced vibration in 2DOF system with damping",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer is : Free vibration in 2DOF system without damping </p>"  // no comma here
        }
    ]
};
