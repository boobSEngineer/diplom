import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import f from "./Form.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const Form = (props) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm({mode: "onBlur"});
    const handleError = (errors) => {
    };
    const registerOptions = {
        full_name: {maxLength: 50, required: "* Название шрифта не может быть пустым"},
        file: {required: "* Пожалуйста выберите файл"},

    };

    useEffect(() => {
        if (props.status_success) {
            reset();
        }
    }, [props.status_success]);

    return (
        <div className={f.box}>
            <div className={f.block1_content}>
                <form onSubmit={handleSubmit(props.handleSubmit, handleError)}>
                    <div className={f.mid_input}>
                        <input type="text" name="full_name" placeholder="Название"
                               {...register("full_name", registerOptions.full_name)}/>
                        <small className="text-danger">
                            {errors?.full_name && errors.full_name.message}
                            {errors?.full_name && errors.full_name.type === "maxLength" ? "* Название шрифта не должно быть длинее 50 символов" : ""}
                        </small>
                    </div>
                    <div className={f.mid_input}>
                        <input type="text" name="version" placeholder="Версия"
                               {...register("version")}/>
                    </div>
                    <div className={f.mid_input}>
                        <input type="text" name="license" placeholder="Лицензия"
                               {...register("license")}/>
                    </div>
                    <div className={f.mid_input}>
                        <input type="text" name="about" placeholder="Текст описания шрифта"
                               {...register("about")}/>
                    </div>
                    <div className={f.input_file}>
                        <div className={f.input_file_inline}>
                            <label form="file">Выберите файл загрузки</label>
                            <input type="file" id="file" {...register("file", registerOptions.file)}/>
                        </div>
                        <small className="text-danger">
                            {errors?.file && errors.file.message}
                        </small>
                    </div>
                    <div className={f.submit}>
                        <button type="submit"><FontAwesomeIcon icon={faArrowUpFromBracket}/> загрузить</button>
                        <>
                            {
                                props.status_message ?
                                    props.status_success ?
                                        <div className={f.alert_success}>Шрифт загружен <FontAwesomeIcon icon={faCheck}/></div> :
                                        <div className={f.alert_false}>{props.status_message} <FontAwesomeIcon icon={faXmark}/></div> :
                                    <p></p>
                            }
                        </>
                    </div>
                </form>
            </div>
        </div>

    )
}


export default Form;
