import React from 'react';
import './AuthorInfo.css';

const AuthorInfo = () => {
    return (
        <section className="author-info">
            <h3>Автор: Ваше Ім'я Прізвище</h3>
            <div className="author-links">
                <a
                    href="https://github.com/HNadin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub профіль
                </a>
                <a
                    href="link-to-original-design"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Оригінальний дизайн
                </a>
            </div>
        </section>
    );
};

export default AuthorInfo;