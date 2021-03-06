import styled from 'styled-components'

export default styled.div`
  width: 100%;
  margin-top: 20px;

  @media (max-width: 750px) {
    margin-top: 10px;
  }

  .transaction__detail_content {
    border: none;
    width: 100%;
    max-height: 400px;
    overflow-y: auto;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-all;
    padding: 20px 30px;
    font-size: 16px;
    color: #888888;
    font-weight: bold;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    margin-top: 5px;
    background-color: #f9f9f9;
    border-radius: 6px;

    @media (max-width: 750px) {
      font-size: 10px;
      border-radius: 3px;
      padding: 10px;
    }
  }

  .transaction__detail_copy {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    width: 100%;

    @media (max-width: 750px) {
      margin-top: 10px;
    }
  }
`

export const TransactionCellDetailCopyButtonPanel = styled.div`
  margin: auto;
  cursor: pointer;
  width: 150px;
  height: 40px;
  background: ${props => props.theme.primary};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;

  > div {
    color: white;
    font-size: 20px;
  }

  > img {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 750px) {
    width: 75px;
    height: 20px;
    padding: 0 10px;

    > div {
      font-size: 12px;
    }

    > img {
      width: 14px;
      height: 14px;
    }
  }
`
