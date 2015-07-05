var Form = React.createClass({displayName: "Form",
  handleSubmit: function(e){
    e.preventDefault();
    console.log("hello");
    var loginInput = this.refs.login.getDOMNode().value;
    console.log(loginInput);
    console.log("Hello");
    this.props.addCard(loginInput.value);
    loginInput.value = " ";
  },

  render: function() {
    return (
      React.createElement("div", {className: "form", onSubmit: this.handleSubmit}, 
        React.createElement("input", {type: "text", ref: "login", placeholder: "Provide Login"}), 
        React.createElement("button", null, "Get Card!")
      )
    );
  }
});