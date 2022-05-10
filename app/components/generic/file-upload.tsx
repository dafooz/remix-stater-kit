import { InputHTMLAttributes, ReactNode, useRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { InputGroup } from '@chakra-ui/react';

type FileUploadProps = {
  register: UseFormRegisterReturn;
  accept?: string;
  multiple?: boolean;
  children?: ReactNode;
  onValueChange?: (newUrl: string) => void;
} & InputHTMLAttributes<'file'>;

export const FileUpload = (props: FileUploadProps) => {
  const { register, accept, multiple, children, onValueChange } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { ref, onChange, ...rest } = register;

  const handleClick = () => inputRef.current?.click();

  return (
    <InputGroup onClick={handleClick}>
      <input
        type={'file'}
        multiple={multiple || false}
        hidden
        accept={accept}
        {...rest}
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
        onChange={(e) => {
          onChange(e);
          const files = e.target.files;
          if (files && files[0]) {
            onValueChange && onValueChange(URL.createObjectURL(files[0]));
          }
        }}
      />
      <>{children}</>
    </InputGroup>
  );
};
