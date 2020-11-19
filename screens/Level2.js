import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
var usedQuestions = [];
var i = 10;
var showedQuestion;
var answer1;
var answer2;
var answer3;
var answer4;
var rightAnswer;

function GetRandomQuestionNumber() {
  var randomQuestion = Math.floor(Math.random() * 10) + 1;
  usedQuestions.push(randomQuestion);
  if (usedQuestions[10 == Number]) {
    return randomQuestion;
  } else {
    <Text></Text>;
  }
}

function progressRender() {
  for (let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++) {
    progressRender.innerHTML += "<div class='prog' id=" + qIndex + '></div>';
  }
}
function answerIsCorrect() {
  document.getElementById(runningQuestionIndex).style.backgroundColor = 'green';
}
function answerIsWrong() {
  document.getElementById(runningQuestionIndex).style.backgroundColor = 'red';
}

//Valitsee saman indeksin arvotun arvon mukaisen kysymyksen.
function QuestionByNumber() {
  if (usedQuestions[0] == 1) {
    showedQuestion = 'Mikä on Suomen pääkaupunki?';
    answer1 = 'Helsinki';
    answer2 = 'Tukholma';
    answer3 = 'Oslo';
    answer4 = 'Kööpenhamina';
    //right answer is number from 1-4
    rightAnswer = 1;
  }
  if (usedQuestions[0] == 2) {
    showedQuestion = 'showedQuestion';
    answer1 = 'answer1';
    answer2 = 'answer2';
    answer3 = 'answer3';
    answer4 = 'answer4';
    rightAnswer = 0;
  }
  if (usedQuestions[0] == 3) {
    showedQuestion = 'showedQuestion';
    answer1 = 'answer1';
    answer2 = 'answer2';
    answer3 = 'answer3';
    answer4 = 'answer4';
    rightAnswer = 0;
  }
  if (usedQuestions[0] == 4) {
    showedQuestion = 'showedQuestion';
    answer1 = 'answer1';
    answer2 = 'answer2';
    answer3 = 'answer3';
    answer4 = 'answer4';
    rightAnswer = 0;
  }
  if (usedQuestions[0] == 5) {
    showedQuestion = 'showedQuestion';
    answer1 = 'answer1';
    answer2 = 'answer2';
    answer3 = 'answer3';
    answer4 = 'answer4';
    rightAnswer = 0;
  }
  if (usedQuestions[0] == 6) {
    showedQuestion = 'showedQuestion';
    answer1 = 'answer1';
    answer2 = 'answer2';
    answer3 = 'answer3';
    answer4 = 'answer4';
    rightAnswer = 0;
  }
  if (usedQuestions[0] == 7) {
    showedQuestion = 'showedQuestion';
    answer1 = 'answer1';
    answer2 = 'answer2';
    answer3 = 'answer3';
    answer4 = 'answer4';
    rightAnswer = 0;
  }
  if (usedQuestions[0] == 8) {
    showedQuestion = 'showedQuestion';
    answer1 = 'answer1';
    answer2 = 'answer2';
    answer3 = 'answer3';
    answer4 = 'answer4';
    rightAnswer = 0;
  }
  if (usedQuestions[0] == 9) {
    showedQuestion = 'showedQuestion';
    answer1 = 'answer1';
    answer2 = 'answer2';
    answer3 = 'answer3';
    answer4 = 'answer4';
    rightAnswer = 0;
  }
  if (usedQuestions[0] == 10) {
    showedQuestion = 'showedQuestion';
    answer1 = 'answer1';
    answer2 = 'answer2';
    answer3 = 'answer3';
    answer4 = 'answer4';
    rightAnswer = 0;
  }
}

export default function Level2({navigation}) {
  GetRandomQuestionNumber();
  QuestionByNumber();
  return (
    <View>
      <Text>
        toimii
        {usedQuestions[0]}
        {showedQuestion}
      </Text>

      <Button title={answer1} />
      <Button title={answer2} />
      <Button title={answer3} />
      <Button title={answer4} />
    </View>
  );
}
