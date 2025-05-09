let profile = {
  name: "Alex",
  age: 30,
  job: "Developer"
};

for (let key in profile) {
  console.log(key + ": " + profile[key]);
}
