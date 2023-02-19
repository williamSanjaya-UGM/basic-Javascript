class Component {
  constructor(props = undefined) {
    this.props = props;
  }

  render() {
    return;
  }
}

class React extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "Chandra",
      Age: 22,
    };
  }

  render() {
    const { props } = this;
    const { Name } = this.state;
    return `My name is ${Name} dan props awal ${props}`;
  }
}

const a1 = new React("william");
const a2 = new React("Sanjaya");

console.log(a1.render());
console.log(a2.render());
