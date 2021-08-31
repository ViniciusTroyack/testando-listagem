import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from ".";

test('Quando o valor do input for vazio, o botão deve ficar disabled', () => {
    render(<Input />)
    const button = screen.getByText('Adicionar')
    expect(button).toBeDisabled();
})

test('Quando o valor do input não for vazio, o botão não deve ficar disabled', () => {
    render(<Input />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, 'teste')
    const button = screen.getByText('Adicionar')
    expect(button).not.toBeDisabled();
})