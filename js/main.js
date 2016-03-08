var answers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes, definitely', 
'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes',
'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 
'Concentrate and ask again', 'Do not count on it', 'My reply is no', 'My sources say no', 
'Outlook not so good', 'Very doubtful'];

function answer() {
	var input = document.getElementById('question');
	if(input.value < 3) {
		alert('You must ask the 8-Ball a question');
	}
	else (input.value >= 3); {
		last-question.innerHTML= answers[Math.floor(Math.random() * answers.length)];
		question.value = null;
		}
}
function log() {
	$("#answer").text(full_list);
}