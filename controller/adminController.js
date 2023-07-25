const create = (req, res) => {
  res.send ('Admin Created ');
};

const viewcourse = (req, res) => {
  res.send ('We are going to viewcourse');
};

const detials = (req, res) => {
  res.send ('We are going to detials');
};

const viewstudent = (req, res) => {
  res.send ('We are going to viewstudent');
};

module.exports = {create, viewcourse, detials, viewstudent};
