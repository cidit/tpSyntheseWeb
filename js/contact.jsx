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
    const name = e.target.id;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  render() {
    // attributes
    const attr = {
      fn: {
        type: 'text',
        id: 'firstname',
        labelText: 'Prenom:',
        placeholder: 'Felix',
        required: 'required',
        autofocus: 'autofocus',
      },
      ln: {
        type: 'text',
        id: 'lastname',
        labelText: 'Nom:',
        placeholder: 'St-Gelais',
        required: 'required',
      },
      e: {
        type: 'email',
        id: 'email',
        labelText: 'Adresse courriel:',
        placeholder: 'a@b.com',
        required: 'required',
      },
      g: {
        r1: {
          id: 'male',
          labelText: ' Male',
          value: 'M',
          checked: 'checked',
        },
        r2: {
          id: 'female',
          labelText: ' Femelle',
          value: 'F',
        },
        type: 'radio',
        name: 'gender',
      },
      a: {
        type: 'number',
        id: 'age',
        labelText: 'Age:',
        placeholder: '17',
        value: '17',
      },
      fi: {
        id: 'famillialincome',
        labelText: 'Revenu famillial:',
        options: {
          _1:{
            value: '[1-25k[',
            text: '1$ a 24 999$',
          },
          _2: {
            value: '[25k-50k[',
            text: '25 000$ a 49 999$',
          },
          _3: {
            value: '[50k-70k[',
            text: '50 000$ a 69 999$',
            selected: 'selected',
          },
          _4: {
            value: '[70k-100k[',
            text: '70 000$ a 99 999$',
          },
          _5: {
            value: '[100k-500k[',
            text: '100 000$ a 499 999$',
          },
          _6: {
            value: '500k+',
            text: '500 000$ +',
          },
        },
      },
      m: {
        id: 'message',
        labelText: 'Message:',
        placeholder: 'Votre message',
        rows: '8',
        required: 'required',
      },
      s: {
        text: 'Soumettre',
        id: 'submit',
        type: 'submit',
      },
      r: {
        text: 'Reinitialiser',
        id: 'reset',
        type: 'reset',
      },
    };
    return(
      <form method="post">
        <Input meta={attr['fn']} />
        <Input meta={attr['ln']} />
        <Input meta={attr['e']} />
        <Input meta={attr['g']} />
        <Input meta={attr['a']} />
        <Select meta={attr['fi']} />
        <TextArea meta={attr['m']} />
        <Button meta={attr['s']} />
        <Button meta={attr['r']} />
      </form>
    )
  }
}

/**-----------------------------------------------------------------------------
/ HIGH LEVEL COMPONENTS
*/

class Input extends React.Component {
  render() {
    const meta = this.props.meta;
    let myStatus;
    if (meta.type == 'radio') {
      const {r1, r2, ...misc} = meta;
      myStatus = (
        <div>
          <div>
            <input id={r1.id} value={r1.value} checked={r1.checked} {...misc} />
            <label htmlFor={r1.id}>{r1.labelText}</label>
          </div>
          <div>
            <input id={r2.id} value={r2.value} {...misc} />
            <label htmlFor={r2.id}>{r2.labelText}</label>
          </div>
        </div>
      )
    } else {
      const {type, id, labelText, ...misc} = meta;
      myStatus = (
        <div>
          <label htmlFor={id} >{labelText}</label>
          <input id={id} type={type} {...misc} />
        </div>
      )
    }
    return {myStatus};
  }
}

class Select extends React.Component {
  render() {
    const meta = this.props.meta;
    return(
      <div className="form-group">

      </div>
    )
  }
}

class TextArea extends React.Component {
  render() {
    const {id, labelText, ...misc} = this.props.meta;
    return(
      <div className="form-group">
        <label htmlFor={id}>{labelText}</label>
        <textarea className="form-control" id={id} {...misc}></textarea>
      </div>
    )
  }
}

class Button extends React.Component {
  render() {
    const {text, ...misc} = this.props.meta;
    return(
      <button className="btn btn-primary" {...misc}>{text}</button>
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
