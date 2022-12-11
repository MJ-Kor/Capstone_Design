const home_commands = {
    '안녕': () => { alert('Hello world!'); },
    '미러 운동': () => { window.location.href = '/pages/fit.html'},
  };

const fit_commands = {
    '스쿼트': () => { window.location.href = '/pages/squat.html'},
    '홈으로': () => { window.history.back()}
  };

const squat_commands = {
  '미러 다른 운동': () => { window.history.back()},
  '미러 홈으로': () => { window.history.go(-2);}
}