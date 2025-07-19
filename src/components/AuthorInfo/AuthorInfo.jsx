import React from 'react';
import './AuthorInfo.css';

const AuthorInfo = () => {
    return (
        <div className="authorinfo">
            <div className="container">
                <div className="author-content">
                    <p className="author-name">
                        <strong>Author: </strong>Nadiia Chaban
                    </p>
                    <div className="author-links">
                        <a href="https://github.com/HNadin" target="_blank" rel="noopener noreferrer">
                            GitHub Profile
                        </a>
                        <a href="https://www.figma.com/design/lmupEsCh0AQrgb5yoB52qn/Mirro?node-id=2-2&t=xU6M9YUWL1MziXuX-1"
                           target="_blank" rel="noopener noreferrer">
                            Original Design
                        </a>
                    </div>
                </div>
            </div>
            <div className="author-divider"></div>
        </div>
    );
};

export default AuthorInfo;