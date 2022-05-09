function solution(a, b) {
  var answer = "";

  // 머리 달력 공식을 이용한 요일 구하기
  // https://blog.naver.com/k8rmot2/220094801826 참조
  // 공식 : ((년 고유번호 + 월 고유번호 + 일) / 7)
  // 년과 월 고유번호 변수 선언
  let yearNum = 3;
  const monthNum = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
  let dayNum = 0;

  // 2016년은 윤년이기 때문에 3월 이상이면 연 고유번호 + 1을 해야 함
  a >= 3 && (yearNum += 1);

  // 요일 계산
  dayNum = (yearNum + monthNum[a - 1] + b) % 7;

  // switch문을 통한 분기 제어
  switch (dayNum) {
    case 0:
      answer = "SUN";
      break;
    case 1:
      answer = "MON";
      break;
    case 2:
      answer = "TUE";
      break;
    case 3:
      answer = "WED";
      break;
    case 4:
      answer = "THU";
      break;
    case 5:
      answer = "FRI";
      break;
    case 6:
      answer = "SAT";
      break;
    default:
      answer = "";
  }
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12901
