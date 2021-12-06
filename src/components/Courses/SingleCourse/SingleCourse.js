import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import './SingleCourse.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import "../../../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import poster from '../../../../src/assets/images/avatar.png';

const SingleCourse = (props) => {
    return (
        <div>
            <Player
                playsInline
                poster={poster}
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
        </div>
    )
}

export default SingleCourse
