export default function createResume (data) {
  var win = window.open("", "Title", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=780, height=700, top="+(screen.height-400)+", left="+(screen.width-840));
  win.document.body.innerHTML = '<link type="text/css" rel="stylesheet" href="../App.css"/>' +
                                '<div id="name"></div>' +
                                '<div id="address"><div id="street"></div><div id="location"></div></div>' +
                                '<div id="separator"></div>' +
                                '<div id="prof_prof"></div>' +
                                '<div id="skills"></div>' +
                                '<div id="prof_exp"><div id="emp_date"></div><div id="job_title"></div><div id="responsibilities"></div></div>' +
                                '<div id="education"></div>';
  win.document.getElementById('name').innerHTML = '<h1>' + data.fname + ' ' + data.lname + '</h1>';
  if (data.street1 && data.street2){
    win.document.getElementById('street').innerHTML = data.street1 + '<br>' + data.street2;
  } else if (data.street1) {
    win.document.getElementById('street').innerHTML = data.street1;
  }
  if (data.city && data.cli_state && data.zip) {
    win.document.getElementById('location').innerHTML = data.city + ', ' + data.cli_state + ' ' + data.zip;
  }
  win.document.getElementById('separator').innerHTML = '<hr>';
  if (data.profess_profile) {
    win.document.getElementById('prof_prof').innerHTML = '<h4>PROFESSIONAL PROFILE</h4>' + data.profess_profile;
  }
  if (data.key_skills) {
    win.document.getElementById('skills').innerHTML = '<h4>KEY SKILLS</h4><li>' + data.key_skills + '</li>';
  }
  if (data.emp_start && data.emp_end) {
    win.document.getElementsById('emp_date').innerHTML = '<b>' + data.emp_start + ' - ' + data.emp_end + '</b>';
  }
  if (data.org_name && data.loc) {
    win.document.getElementById('prof_exp').innerHTML = '<h4>PROFESSIONAL EXPERIENCE</h4><b>' + data.org_name + ' - ' + data.loc + ' - ' + data.pos_name + '</b>';
  }
  if (data.tasks) {
    win.document.getElementById('responsibilities').innerHTML = '<li>' + data.tasks + '</li>';
  }
  if (data.school_name && data.diploma) {
    win.document.getElementsById('education').innerHTML = '<h4>EDUCATION</h4> High School Diploma - ' + data.school_name;
  }
  //win.document.body.innerHTML = note.gender;
};
