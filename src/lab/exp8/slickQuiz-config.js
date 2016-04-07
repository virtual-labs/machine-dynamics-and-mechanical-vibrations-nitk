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
            "q": "A system with 100kg mass and 1kN/mm stiffness needs to be operated at 50rad/s. It is intended to transfer all vibrations of this mass to a secondary system. Which of the following would be suitable ",
            "a": [
                {"option": "10kg mass with 100N/mm stiffness",    "correct": false},
                {"option": "20kg mass with 100N/mm stiffness",     "correct": false},
		{"option": "20kg mass with 50N/mm stiffness",  "correct": true},
                {"option": "10kg mass with 50N/mm stiffness",  "correct": false} 
// no comma here
            ],
            "correct": "<p><span>Right Answer!</span></p>",
            "incorrect": "<p><span>Wrong</span></p>Correct Answer is : 20kg mass with 50N/mm stiffness"  // no comma here
        },
		
{ // Question 2
            "q": " A two DOF system with one of natural frequency having value of zero is called  ",
            "a": [
                {"option": "Degenerative/Semi-definite system",    "correct": true},
                {"option": "Indefinite system",     "correct": false},
		{"option": "Definite system",  "correct": false},
                {"option": "None of these",  "correct": false} 
// no comma here
            ],
            "correct": "<p><span>Right Answer!</span></p>",
            "incorrect": "<p><span>Wrong</span></p> Right Answer is : Degenerative/Semi-definite System"  // no comma here
        },


		
  { // Question 4
            "q": "A SDOF was vibrating violently at a given frequency, it was decided to add a secondary system to it and control vibration. The added system to control vibration is known as ",
            "a": [
                {"option": "Shaker",    "correct": false},
                {"option": "Tuned Dynamic Vibration Absorber",     "correct": true},
		{"option": "Critical Damper",  "correct": true},
                {"option": "None of these",  "correct": false} 
// no comma here
            ],
            "correct": "<p><span>Right Answer!</span></p>",
            "incorrect": "<p><span>Wrong</span></p> Right Answer is : Tuned Dynamic Vibration Absorber"  // no comma here
        },

		
  { // Question 6
            "q": "One of the natural frequencies of the Tuned Mass Damper system is the same as natural frequency of secondary mass-spring system",
            "a": [
                {"option": "False",    "correct": true},
                {"option": "True",     "correct": false}
// no comma here
            ],
            "correct": "<p><span>Right Answer!</span></p>",
            "incorrect": "<p><span>Wrong</span></p>"  // no comma here
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
