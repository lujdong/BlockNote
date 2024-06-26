import * as Ariakit from "@ariakit/react";
import { assertEmpty } from "@blocknote/core";

import { ComponentProps } from "@blocknote/react";
import { forwardRef } from "react";

export const PanelFileInput = forwardRef<
  HTMLInputElement,
  ComponentProps["FilePanel"]["FileInput"]
>((props, ref) => {
  const { className, accept, value, placeholder, onChange, ...rest } = props;

  assertEmpty(rest);

  return (
    <Ariakit.FormProvider>
      <Ariakit.FormInput
        className={className}
        ref={ref}
        name={"panel-input"}
        type={"file"}
        accept={accept}
        value={value ? value.name : undefined}
        onChange={async (e) => onChange?.(e.target.files![0])}
        placeholder={placeholder}
      />
    </Ariakit.FormProvider>
  );
});
