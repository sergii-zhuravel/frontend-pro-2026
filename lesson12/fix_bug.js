const dashboard = {
  title: "Dashboard opened",

  open() {
    console.log(this.title);
  },
};

setTimeout(dashboard.open, 1000);
