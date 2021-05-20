export const cpf = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
};

export const security_code = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})\d+?$/, '$1')
};

export const card_number = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})\d+?$/, '$1')
};

export const money = (value, options = { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }) => {
  const valueReplaced = value.replace(/\D/g, '');

  if (valueReplaced) {
    let fractionalValue = valueReplaced / 1;

    return fractionalValue.toLocaleString('pt-br', { ...options });
  }

  return valueReplaced;
};

export const plots = (value) => {
  const valuePlots = value / 12;
  const valuePlotsValue = (valuePlots).toFixed(2);
  const valuePlotsParsed = parseFloat(valuePlotsValue);

  return valuePlotsParsed.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};
