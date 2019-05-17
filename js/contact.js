/**-----------------------------------------------------------------------------
/ APP COMPONENT
*/

class Form extends React.Component {
  constructor(props){
    super(props);
    this.initialState = {
      firstname: 'Félix',
      lastname: 'St-Gelais',
      email: 'exemple@exemple.com',
      gender: 'Male',
      age: '17',
      famillialincome: '[50k-70k[',
      message: 'Entrez votre message',
    };
    this.state = this.initialState;
  }

  handleEvent = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  render() {
    const {fn, ln, e, g, a, fi, m} = this.state;
    const btn = {
      submit: 'Soumettre',
      reset: 'Réinitialiser',
    };

    // attributes
    const attr = {
      fn: {

      },
      ln: {

      },
      e: {

      },
      g: {

      },
      a: {

      },
      fi: {

      },
      m: {

      },
    };
    return(
      <form action="mailto:a@b.com" method="post">
        <Input state={fn} type="text" meta={tmp} />
        <Input state={ln} type="text" meta={tmp} />
        <Input state={e} type="email" meta={tmp} />
        <Input state={g} type="radio" meta={tmp} />
        <Input state={a} type="number" meta={tmp} />
        <Select state={fi} meta={tmp} />
        <TextArea state={m} meta={tmp} />
        <Button info={btn['submit']} />
        <Button info={btn['reset']} />
      </form>
    )
  }
}

/**-----------------------------------------------------------------------------
/ HIGH LEVEL COMPONENTS
*/

class Input extends React.Component {
  render() {
    const info = this.props.info;
    const type = this.props.type;
    const meta = this.props.meta;
    const input = () => {
      switch (type) {
        case 'radio':
          return(

          );
          break;
        default:
          return(

          );
      }
    };
    return {input};
  }
}

class Select extends React.Component {
  render() {
    const info = this.props.info;
    const meta = this.props.meta;
    return(
      <div className="form-group">

      </div>
    )
  }
}

class TextArea extends React.Component {
  render() {
    const state = this.props.state;
    const meta = this.props.meta;
    var id, message;
    state.map(([key, value]) => {id = key; message = value});
    return(
      <div className="form-group">
        <label for={id}>Message</label>
        <textarea class="form-control" id={id} value={message} {... meta}></textarea>
      </div>
    )
  }
}

class Button extends React.Component {
  render() {
    const info = this.props.info;
    var t, v;
    info.map(([key, value]) => {t = key; v = value});
    return(
      <button className="btn btn-primary" type={t}>{v}</button>
    )
  }
}

/**-----------------------------------------------------------------------------
/ LOW LEVEL COMPONENTS
*/



/**-----------------------------------------------------------------------------
/ RENDERING
*/

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);
