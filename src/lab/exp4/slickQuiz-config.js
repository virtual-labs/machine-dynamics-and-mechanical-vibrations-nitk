// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<a href='../index.html'>click here</a> to go to list of Experiments",
        "level1":  "Excellent! You should try another Experiment.",
        "level2":  "That was nice. May be next time you'll get all of them right! Good Luck!",
        "level3":  "Give another try at the simulator. You should be able to pick up few more things this time.",
        "level4":  "Probably you need to build some more understanding about the topic.",
        "level5":  "May be you should spend some more time with the concepts." // no comma here
    },
    "questions": [
                { // Question 1 - Multiple Choice, Multiple True Answers, Select Any
            "q": "At resonance, amplification factor depends only on?",
            "a": [
                {"option": "damping ratio",               "correct": true},
                {"option": "frequency ratio",   "correct": false},
                {"option": "deflection due to static force",      "correct": false},
                {"option": "none of these",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : damping ratio</p>" // no comma here
        },
       { // Question 2 - Multiple Choice, Multiple True Answers, Select All
            "q": " A system with 10kg mass 10N/m stiffness and 5Ns/m damping is being operated at 1rad/s if X<sub>st</sub>=1cm what is the value of X<sub>0</sub> ?",
            "a": [
                {"option": "2cm",           "correct": true},
                {"option": "1cm",                  "correct": false},
                {"option": "4cm ",  "correct": false},
                {"option": "none of these",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer Is : 2cm </p>" // no comma here
        },
        
  
{ // Question 7
            "q": "Phase difference between input and response at resonance is 90<sup>o</sup>",
            "a": [
                {"option": "true",    "correct": true},
                {"option": "false",     "correct": false}
		


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span></p>"  // no comma here
        },


{ // Question 9
            "q": "What is the phase difference between input and response for a system with 10kg mass 10N/m stiffness and 15Ns/m damping being operated at 0.5 rad/s ",
            "a": [
                {"option": "90<sup>o</sup> ",    "correct": false},
                {"option": "45<sup>o</sup>",     "correct": true},
		 {"option": "30<sup>o</sup>",    "correct": false},
                {"option": "60<sup>o</sup>",     "correct": false}
		
		


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : 45<sup>o</sup></p>"  // no comma here
        },

{ // Question 5
            "q": "Amplification factor of a system was found to be 4 at resonance. What would be its damping ratio? ",
            "a": [
                {"option": "0.5",    "correct": false},
                {"option": "0.25",     "correct": false},
		 {"option": "0.125",    "correct": true},
                {"option": "1",     "correct": false}
		
		


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer Is : 0.125</p>"  // no comma here
        }

    ]
};
