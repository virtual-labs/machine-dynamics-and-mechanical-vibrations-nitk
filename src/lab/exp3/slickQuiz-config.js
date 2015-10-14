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
            "q": " A rod 20 mm diameters and 1.2 m long is fixed at both ends and has a mass of 2kg concentrated at the middle. Ignoring the weight of the rod, calculate the frequency of transverse vibrations. Take E=200 Gpa.?",
            "a": [
                {"option": "5.88Hz",               "correct": false},
                {"option": "23.52Hz",   "correct": false},
                {"option": "47.04Hz",      "correct": true},
                {"option": "11.76Hz",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 47.04Hz</p>" // no comma here
        },
       { // Question 2 - Multiple Choice, Multiple True Answers, Select All
            "q": " What is the natural frequency in rad/s of a system whose damped natural frequency is 30rad/s and damping ratio is 0.6 ?",
            "a": [
                {"option": "37.5",           "correct": true},
                {"option": "30",                  "correct": false},
                {"option": "50",  "correct": false},
                {"option": "45",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer Is : 37.5</p>" // no comma here
        },
        
  
{ // Question 7
            "q": " The amplitude of a damped system will not change with time.",
            "a": [
                {"option": "false",    "correct": true},
                {"option": "true",     "correct": false}
		


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br></p>"  // no comma here
        },


{ // Question 9
            "q": "For an over damped system ",
            "a": [
                {"option": "&zeta;&gt;1 ",    "correct": true},
                {"option": "&zeta;&lt;1",     "correct": false},
		 {"option": "&zeta;=1",    "correct": false},
                {"option": "none of these",     "correct": false}
		
		


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer Is: &zeta;&gt;1</p>"  // no comma here
        },

{ // Question 10
            "q": " The magnification factor is the ratio of maximum amplitude and static deflection.",
            "a": [
                {"option": " true",    "correct": true},
                {"option": "false",     "correct": false}



// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:true</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:true</p>"  // no comma here
        }

    ]
};
