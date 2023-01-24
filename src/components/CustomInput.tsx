import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
    parentSet?: string
    label?: string;
    inputSet?: string;
    labelSet?: string;
}
interface PropsTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    parentSet?: string
    label?: string;
    inputSet?: string;
    labelSet?: string;
  }

export const CustomInput: FC<PropsInput> = ({parentSet, label, inputSet, labelSet, ...props}) => {
    return (
        <div className={`mb-3 ${parentSet}`}>
            <label className={`${labelSet}`}>{label}</label>
            <input
                className={`input input-bordered w-full bg-white ${inputSet}`}
                {...props}
            />
        </div>
    )
}

export const TextArea: FC<PropsTextArea> = ({parentSet, label, inputSet, labelSet, ...props}) => {
    return (
        <div className={`mb-3 ${parentSet}`}>
            <label className={`${labelSet}`}>{label}</label>
            <textarea
                className={`input input-bordered w-full bg-white ${inputSet}`}
                {...props}
            >

            </textarea>
        </div>
    )
}

