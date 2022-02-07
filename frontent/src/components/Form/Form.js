import React from 'react';
import {useForm} from "react-hook-form";

const Form = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onBlur"});
    const handleError = (errors) => {
    };
    const registerOptions = {
        full_name: {required: "name is required"},
        version: {required: "version is required"},
        license: {required: "license is required"},
        about: {required: "about is required"},

    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(props.handleSubmit, handleError)}>
                    <label>Загрузка файла</label>
                    <div>
                        <input type="file" {...register("file")}/>
                    </div>
                    <div>
                        <input type="text" name="full_name" placeholder="Имя"
                               {...register("full_name", registerOptions.full_name)}/>
                        <small className="text-danger">
                            {errors?.full_name && errors.full_name.message}
                        </small>
                    </div>
                    <div>
                        <input type="text" name="version" placeholder="Версия"
                               {...register("version", registerOptions.version)}/>
                        <small className="text-danger">
                            {errors?.version && errors.version.message}
                        </small>
                    </div>
                    <div>
                        <input type="text" name="license" placeholder="Лицензия"
                               {...register("license", registerOptions.license)}/>
                        <small className="text-danger">
                            {errors?.license && errors.license.message}
                        </small>
                    </div>
                    <div>
                        <input type="text" name="about" placeholder="О чем"
                               {...register("about", registerOptions.about)}/>
                        <small className="text-danger">
                            {errors?.about && errors.about.message}
                        </small>
                    </div>
                    <input type="submit" value="Загрузить файл"/>
                </form>
            </div>

        </div>

    )
}


export default Form;
