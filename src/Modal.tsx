import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: '0 auto',
  },
}));

interface Props {
  open: true | false; // boolenan
  handleClose: () => void;
  selectedRocket: {
    name: string;
    url: string;
    description: string;
  };
}
export default function SimpleModal(props: Props) {
  const {
    open,
    handleClose,
    selectedRocket: { name, url, description },
  } = props;
  const classes = useStyles();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <div className={classes.paper}>
          <h1>{name}</h1>
          <img className="photo" src={url} alt={name} />
          <p>{description}</p>
        </div>
      </Modal>
    </div>
  );
}
