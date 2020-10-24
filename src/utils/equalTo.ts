import * as yup from 'yup';

export function equalTo(ref: yup.Ref, msg: string): yup.StringSchema {
  //@ts-ignore
	return this.test({
		name: 'equalTo',
		exclusive: false,
    message: msg || 'As senhas precisam ser iguais',
		params: {
			reference: ref
		},
		test: function(value: any) {
      return value === this.resolve(ref) 
		}
	})
};