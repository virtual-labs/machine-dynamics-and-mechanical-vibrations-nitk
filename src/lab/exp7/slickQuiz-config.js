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
          { // Question 1
            "q": "A motor of mass 1000 Kg is kept on a foundation of stiffness 100 N/mm, then &omega;<sub>n</sub> in rad/s is ",
            "a": [
                {"option": "1000",    "correct": false},
                {"option": "100",     "correct": false},
		{"option": "10",  "correct": true},
                {"option": "None of these",  "correct": false} 
// no comma here
            ],
            "correct": "<p><span>Right Answer!</span></p>",
            "incorrect": "<p><span>Wrong</span></p> Right Answer is : 10"  // no comma here
        },
		

{ // Question 3
            "q": "Theoretically the number of modes of a steel scale held at one end (cantilever)",
            "a": [
                {"option": "0",    "correct": false},
                {"option": "1",     "correct": false},
		{"option": "&infin;",  "correct": true},
                {"option": "None of these",  "correct": false} 
// no comma here
            ],
            "correct": "<p><span>Right Answer!</span></p>",
            "incorrect": "<p><span>Wrong</span></p> Right Answer is : &infin;"  // no comma here
        },
		
	
  { // Question 5
            "q": "For a MDOF system roots of frequency equation ",
            "a": [
                {"option": "Do not exist",    "correct": false},
                {"option": "Are all equal",     "correct": false},
		{"option": "Are Eigen Values",  "correct": true},
                {"option": "None of these",  "correct": false} 
// no comma here
            ],
            "correct": "<p><span>Right Answer!</span></p>",
            "incorrect": "<p><span>Wrong</span></p> Right Answer is : Are Eigen Values"  // no comma here
        },
		
  { // Question 6
            "q": "Lagrange’s equation is used to find ____ of a MDOF ",
            "a": [
                {"option": "Governing Differential Equation",    "correct": true},
                {"option": "Modes",     "correct": false},
				{"option": "Frquencies",  "correct": false},
                {"option": "None of these",  "correct": false} 
// no comma here
            ],
            "correct": "<p><span>Right Answer!</span></p>",
            "incorrect": "<p><span>Wrong</span></p> Right Answer is : Governing Differential Equation"  // no comma here
        },
		
  { // Question 7
            "q": "For effective isolation, frequency ratio should be greater than ",
            "a": [
                {"option": "1",    "correct": false},
                {"option": "0.707",     "correct": false},
		{"option": "1.414",  "correct": true},
                {"option": "None of these",  "correct": false} 
// no comma here
            ],
            "correct": "<p><span>Right Answer!</span></p>",
            "incorrect": "<p><span>Wrong</span></p> Right Answer is : 1.414"  // no comma here
        }

    ]
};
