export const PasswordTextFieldStyles = {
    '& input:valid + fieldset': {
      borderColor: '#DBB404',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 12,
      padding: '4px !important', // override inline-style
    }
};

export const fixedDraggable = {left:0,right:0,top:0,bottom:0}