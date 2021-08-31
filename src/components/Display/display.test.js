import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Display } from ".";

test('Quando o usuário clicar no botão Enviar o valor do input deve ser adicionado na lista', () => {
    render(<Display />)

    const input = screen.getByRole('textbox')
    const button = screen.getByText('Adicionar')
    userEvent.type(input, 'teste')
    userEvent.click(button)

    const item = screen.getAllByText('teste')

    expect(item).toHaveLength(1);
})