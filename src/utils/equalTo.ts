import * as yup from 'yup';

export function equalTo(ref: any, msg: string) {
	return this.test({
		name: 'equalTo',
		exclusive: false,
    message: msg || 'As senhas precisam ser iguais',
		params: {
			reference: ref.path
		},
		test: function(value: any) {
      return value === this.resolve(ref) 
		}
	})
};