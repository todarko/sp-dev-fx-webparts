import * as React from 'react';
import styles from './HelpdeskForms.module.scss';
import { IHelpdeskFormsProps } from './IHelpdeskFormsProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HelpdeskForms extends React.Component<IHelpdeskFormsProps, {}> {
  public render(): React.ReactElement<IHelpdeskFormsProps> {
    return (
      <div className={ styles.helpdeskForms }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <span className={ styles.title }>Initial Change Test</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
