import React from 'react';
import { compose } from 'ramda';
import * as PropTypes from 'prop-types';
import withStyles from '@mui/styles/withStyles';
import withTheme from '@mui/styles/withTheme';
import Chip from '@mui/material/Chip';
import inject18n from './i18n';

const styles = () => ({
  chip: {
    fontSize: 12,
    lineHeight: '12px',
    height: 25,
    marginRight: 7,
    textTransform: 'uppercase',
    borderRadius: '0',
  },
  chipInList: {
    fontSize: 12,
    lineHeight: '12px',
    height: 20,
    float: 'right',
    textTransform: 'uppercase',
    borderRadius: '0',
  },
});

const inlineStyles = {
  white: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: '#ffffff',
  },
  whiteLight: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    color: '#000000',
  },
  green: {
    backgroundColor: 'rgba(76, 175, 80, 0.08)',
    color: '#4caf50',
  },
  blue: {
    backgroundColor: 'rgba(92, 123, 245, 0.08)',
    color: '#5c7bf5',
  },
  red: {
    backgroundColor: 'rgba(244, 67, 54, 0.08)',
    color: '#f44336',
  },
  orange: {
    backgroundColor: 'rgba(255, 152, 0, 0.08)',
    color: '#ff9800',
  },
};

const ItemLikelihood = (props) => {
  const { likelihood, classes, variant, t, theme } = props;
  const style = variant === 'inList' ? classes.chipInList : classes.chip;
  if (!likelihood) {
    return (
      <Chip
        classes={{ root: style }}
        style={
          theme.palette.mode === 'dark'
            ? inlineStyles.white
            : inlineStyles.whiteLight
        }
        label={t('Unknown')}
      />
    );
  }
  if (likelihood <= 20) {
    return (
      <Chip
        classes={{ root: style }}
        style={inlineStyles.red}
        label={`${likelihood} / 100`}
      />
    );
  }
  if (likelihood <= 50) {
    return (
      <Chip
        classes={{ root: style }}
        style={inlineStyles.orange}
        label={`${likelihood} / 100`}
      />
    );
  }
  if (likelihood <= 75) {
    return (
      <Chip
        classes={{ root: style }}
        style={inlineStyles.blue}
        label={`${likelihood} / 100`}
      />
    );
  }
  if (likelihood <= 100) {
    return (
      <Chip
        classes={{ root: style }}
        style={inlineStyles.green}
        label={`${likelihood} / 100`}
      />
    );
  }
  return (
    <Chip
      classes={{ root: style }}
      style={inlineStyles.white}
      label={`${likelihood} / 100`}
    />
  );
};

ItemLikelihood.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.string,
  likelihood: PropTypes.number,
};

export default compose(
  withTheme,
  inject18n,
  withStyles(styles),
)(ItemLikelihood);
