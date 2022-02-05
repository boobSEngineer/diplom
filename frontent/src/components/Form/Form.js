import React from 'react';

const Form = (props) => {

    return (
        <div>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <label>
                        <input type="file" onChange={props.handleFileSelect}/>
                        <input type="text" name="full_name" placeholder="Имя" onChange={props.handleFullNameChange}/>
                        <input type="text" name="version" placeholder="Версия" onChange={props.handleVersionChange}/>
                        <input type="text" name="license" placeholder="Лицензия" onChange={props.handleLicenseChange}/>
                        <input type="text" name="about" placeholder="О чем" onChange={props.handleAboutChange}/>
                        <input type="submit" value="Загрузить файл" />
                    </label>
                </form>
            </div>

        </div>

    )
}


export default Form;
