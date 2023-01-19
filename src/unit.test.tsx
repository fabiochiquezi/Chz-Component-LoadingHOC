import { fireEvent, render, screen } from '@testing-library/react'
import React, { useState } from 'react'
import { LoadingHOC } from '.'
import { waitLoadingHOCAnim } from './animation'


describe('LoadingHOC', () => {
  it('condition', async () => {
    const callBack = jest.fn()
    const DivTest: React.FC = () => {
      const [loading, setLoading] = useState(true)
      return (
        <div>
          <button onClick={() => setLoading(prev => !prev)}>btnChangeState</button>
          <LoadingHOC condition={loading} callBack={callBack}>children</LoadingHOC>
        </div >
      )
    }
    render(<DivTest />)
    const btnChangeState = screen.getByText('btnChangeState')

    expect(screen.getByText('children').className).toBe('display-none fade-out')
    expect(screen.getByTestId('loading-HOC').className).toBe('display-none fade-out')

    fireEvent.click(btnChangeState)
    await waitLoadingHOCAnim(1000)

    expect(screen.getByText('children').className).toBe('fade-in display-block')
    expect(screen.getByTestId('loading-HOC').className).toBe('fade-in display-none')

    fireEvent.click(btnChangeState)
    await waitLoadingHOCAnim(1000)

    expect(screen.getByText('children').className).toBe('fade-out display-none')
    expect(screen.getByTestId('loading-HOC').className).toBe('fade-in display-block')

    expect(callBack).toHaveBeenCalledTimes(3)
  })
})
