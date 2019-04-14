import React, { Component } from 'react';
import CardList from './CardList';

class CardContainer extends Component {
  state = {
    projects: [
      {
        title: 'Project One',
        imgLink:
          'https://cdn.vox-cdn.com/thumbor/K7b0-MAQj0C2hy707Mm8WsUIocI=/0x0:600x350/1200x800/filters:focal(252x127:348x223)/cdn.vox-cdn.com/uploads/chorus_image/image/63386642/A_Consensus_sm.0.jpg'
      },
      {
        title: 'Project One',
        imgLink:
          'https://asset1.cxnmarksandspencer.com/is/image/mands/SD_04_T79_1534S_T4_X_EC_0?$PDP_MAIN_MOB_L_R$'
      },
      {
        title: 'Project One',
        imgLink:
          'https://cdn.vox-cdn.com/thumbor/K7b0-MAQj0C2hy707Mm8WsUIocI=/0x0:600x350/1200x800/filters:focal(252x127:348x223)/cdn.vox-cdn.com/uploads/chorus_image/image/63386642/A_Consensus_sm.0.jpg'
      },
      {
        title: 'Project One',
        imgLink:
          'https://cdn.vox-cdn.com/thumbor/K7b0-MAQj0C2hy707Mm8WsUIocI=/0x0:600x350/1200x800/filters:focal(252x127:348x223)/cdn.vox-cdn.com/uploads/chorus_image/image/63386642/A_Consensus_sm.0.jpg'
      }
    ]
  };
  render() {
    const { projects } = this.state;
    return (
      <div className='cards-container'>
        <CardList projects={projects} />
      </div>
    );
  }
}

export default CardContainer;
