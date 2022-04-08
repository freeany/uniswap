import React, { useEffect, useState } from 'react'
import { AlertCircle, Navigation, Lock } from 'react-feather'
import 'antd/dist/antd.css'
import { Select, Input, Progress } from 'antd'
import { BookOpen } from 'react-feather'
import { CheckWrapperStyle } from './styleds'

// import contract from './contract.json'

const { Option } = Select
interface CoinInterface {
  id: string
  name: string
  value: string
}

interface ContractDataInterface {
  buy_tax: string
  can_take_back_ownership: string
  cannot_sell_all: string
  creator_address: string
  creator_balance: string
  creator_percent: string
  dex: Array<{
    liquidity: string
    name: string
    pair: string
  }>
  holder_count: string
  holders: Array<{
    address: string
    balance: string
    is_contract: number
    is_locked: number
    percent: string
    tag: string
  }>
  is_anti_whale: string
  is_blacklisted: string
  is_honeypot: string
  is_in_dex: string
  is_mintable: string
  is_open_source: string
  is_proxy: string
  is_whitelisted: string
  lp_holder_count: string
  lp_holders: Array<{
    address: string
    balance: string
    is_contract: number
    is_locked: number
    percent: string
    tag: string
    locked_detail?: Array<{
      amount: string
      end_time: string
      opt_time: string
    }>
  }>
  lp_total_supply: string
  owner_address: string
  owner_balance: string
  owner_change_balance: string
  owner_percent: string
  sell_tax: string
  slippage_modifiable: string
  token_name: string
  token_symbol: string
  total_supply: string
  transfer_pausable: string
}

export default function Check() {
  const coinImgs = [
    {
      name: 'BSC',
      value: 'https://avesp.xyz/oss/chain/bsc.png'
    },
    {
      name: 'Arbitrum',
      value: 'https://avesp.xyz/oss/chain/arbitrum.png'
    },
    {
      name: 'Avalanche',
      value: 'https://avesp.xyz/oss/chain/avalanche.png'
    },
    {
      name: 'Ethereum',
      value: 'https://avesp.xyz/oss/chain/eth.png'
    },
    {
      name: 'Heco',
      value: 'https://avesp.xyz/oss/chain/heco.png'
    },
    {
      name: 'Polygon',
      value: 'https://avesp.xyz/oss/chain/polygon.png'
    }
  ]
  const [coins, setCoins] = useState<Array<CoinInterface>>([])

  // 定义选择的coinType状态
  const [coinType, setCoinType] = useState<string>('56')
  // address值
  const addressTemp = '0x724e740766b0ecc806ea1d7eec63e563e9407925'
  const [coinAddress, setCoinAddress] = useState<string>(addressTemp)

  // const coinIndex = 0

  const [currentCoin, setCurrentCoin] = useState<CoinInterface>({ id: '', name: '', value: '' })
  const [isChecking, setChecking] = useState<boolean>(true)

  const [checkCoinResult, setCheckCoinResult] = useState<ContractDataInterface>()
  function fetchPageData() {
    setChecking(true)
    fetch(`https://api.gopluslabs.io/api/v1/token_security/${coinType}?contract_addresses=${coinAddress}`)
      .then(response => response.json())
      .then(data => {
        setCheckCoinResult(data.result[coinAddress])
        setChecking(false)
      })
      .catch(e => {
        console.log(e, 'ee....')
      })
  }
  function fetchChains() {
    fetch(`https://api.gopluslabs.io/api/v1/supported_chains`)
      .then(response => response.json())
      .then(data => {
        // console.log(data, 'data...')
        const result = data.result.map((item: CoinInterface) => {
          const coi = coinImgs.find(co => co.name.toLowerCase() === item.name.toLowerCase())
          coi && (item.value = coi.value)
          return item
        })

        setCoins(result)
        console.log(result[0], 'result[0]result[0]')
        setCurrentCoin(result[0])
      })
      .catch(e => {
        console.log(e, 'ee....')
      })
  }
  useEffect(() => {
    fetchPageData()
    fetchChains()
  }, [])

  // 点击check
  function handleCheckBtn() {
    fetchPageData()
  }

  function inputChangeAddress(e: any) {
    // console.log(e.target.value, 'eee')
    setCoinAddress(e.target.value)
  }

  // useEffect(() => {
  //   // console.log(checkCoinResult, 'checkCoinResultcheckCoinResult')
  // }, [checkCoinResult])

  function handleChange(value: any) {
    console.log(`selected ${value}`)
    const coin = coins.find(c => c.name === value)
    if (coin) {
      setCurrentCoin(coin)
      setCoinType(coin.id)
    } else {
      setCurrentCoin({ id: '', name: '', value: '' })
    }
  }
  const selectBefore = (
    <Select key={currentCoin.name} defaultValue={currentCoin.name} onChange={handleChange}>
      {coins.map((item, index) => {
        return (
          <Option key={index} value={item.name}>
            {item.name}
          </Option>
        )
      })}
    </Select>
  )

  function beforeEllipsisAfter(params: string, beforeSliceLength = 6): string {
    if (!params) return ''
    return params.slice(0, beforeSliceLength) + '...' + params.slice(-4)
  }

  function formatDate(date: string): string {
    return date.slice(0, 10)
  }

  function rightHasContent(data: ContractDataInterface) {
    console.log(data, 'ContractDataIn.terface')
    return (
      <>
        <div className="right-1">
          <div className="top-title">
            <BookOpen size={16} color="#558bed"></BookOpen> <div className="report-c">Check Report</div>
          </div>
          <div className="basic-info">
            <div className="info-title">Basic Info</div>
            <div className="field">
              <div className="field-name">Token Name</div>
              <div className="field-value">
                {data.token_symbol} ({data.token_name})
              </div>
            </div>
            <div className="field">
              <div className="field-name">Token Contract Address</div>
              <div className="field-value">
                <a href={`https://bscscan.com/address/${coinAddress}`} target="_blank" rel="noreferrer">
                  {beforeEllipsisAfter(coinAddress)}
                </a>
              </div>
            </div>
            <div className="field">
              <div className="field-name">Contract Creator</div>
              <div className="field-value">
                <a href={`https://bscscan.com/address/${data.creator_address}`} target="_blank" rel="noreferrer">
                  {beforeEllipsisAfter(data.creator_address)}
                </a>
              </div>
            </div>
            <div className="field">
              <div className="field-name">Contract Owner (Transferred)</div>
              <div className="field-value">
                <a href={`https://bscscan.com/address/${data.owner_address}`} target="_blank" rel="noreferrer">
                  {beforeEllipsisAfter(data.owner_address)}
                </a>
              </div>
            </div>
            <div className="field">
              <div className="field-name">Total Supply</div>
              <div className="field-value">{data.total_supply}</div>
            </div>
            <div className="field">
              <div className="field-name">Circulation</div>
              <div className="field-value">-</div>
            </div>
            <div className="field">
              <div className="field-name">Decimal</div>
              <div className="field-value">18</div>
            </div>
          </div>
          <div className="risk-check">
            <div className="info-title">Risk Check</div>
            <div className="card-list">Has blacklist, restricted trade</div>
          </div>

          <div className="basic-info">
            <div className="info-title">Tax Check</div>
            <div className="field">
              <div className="field-name">Buy Tax</div>
              <div className="field-value danger">{Number(data.buy_tax) * 100}%</div>
            </div>
            <div className="field">
              <div className="field-name">Sell Tax</div>
              <div className="field-value danger">{Math.round(Number(data.sell_tax) * 100)}%</div>
            </div>
          </div>

          <div className="feedback-tips">
            {/* If you have any doubts about the check results, please <a>Click feedback</a> */}
          </div>

          <div className="technical-support">
            <span className="label">Technical Support</span>
            <img src="https://avedex.cc/static/img/goPlus-logo.291f9b13.png" alt="" />
            <div className="url">gopluslabs.io</div>
          </div>
        </div>
        <div className="right-2">
          <div className="share-report">
            <div className="btn-share">
              <Navigation size={16}></Navigation>
              <div className="share-re">Share Report</div>
            </div>
          </div>
          <div className="basic-info">
            <div className="info-title">Token Holders Info</div>
            <div className="info-title">Token Holders: {data.holder_count}</div>
            {/* <div className="field">
              <div className="field-name alink">PancakeSwap V2: TKF 13</div>
              <div className="field-value">1,116.58 (37.22%)</div>
            </div> */}

            {data.holders.map(item => {
              return (
                <div className="field" key={item.address}>
                  <div className="field-name alink">{beforeEllipsisAfter(item.address, 2)}</div>
                  <div className="field-value">
                    {Number(item.balance).toFixed(2)} ({(Number(item.percent) * 100).toFixed(2)}%)
                  </div>
                </div>
              )
            })}
          </div>

          <div className="basic-info">
            <div className="info-title">Pool Info</div>
            <div className="info-title">LP Holders: {data.lp_holder_count}</div>
            {/* <div className="field">
              <div className="field-name alink">0x...e03c</div>
              <div className="field-value">1,202.03 (80.37%)</div>
            </div> */}
            {data.lp_holders.map(hold => {
              return (
                <div className="info2-field" key={hold.address}>
                  <div className="field">
                    <div className="field-name alink center">
                      {hold.is_locked == 1 ? (
                        <>
                          <Lock color="yellow" size={16}></Lock> Lock Contract
                        </>
                      ) : (
                        beforeEllipsisAfter(hold.address, 2)
                      )}
                    </div>
                    <div className="field-value">
                      {Number(hold.balance).toFixed(2)} ({(Number(hold.percent) * 100).toFixed(2)}%)
                    </div>
                  </div>

                  {hold.is_locked == 1 && hold.locked_detail && hold.locked_detail.length > 0 && (
                    <div className="table-f">
                      <div className="thead">
                        <div className="thead-1">Amount</div>
                        <div className="thead-2">Lock Date</div>
                        <div className="thead-3">Unlock Date</div>
                      </div>
                      {hold.locked_detail.map((item, index) => {
                        return (
                          <div className="tbody" key={index}>
                            <div className="thead-1">{item.amount}</div>
                            <div className="thead-2">{formatDate(item.opt_time)}</div>
                            <div className="thead-3">{formatDate(item.end_time)}</div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}

            {/* <div className="field">
              <div className="field-name alink">0x...c1aa</div>
              <div className="field-value">1,202.03 (80.37%)</div>
            </div> */}
          </div>
        </div>
      </>
    )
  }

  function rightNoContent() {
    return (
      <div className="no-main">
        <div className="top-title w100">
          <BookOpen size={16} color="#558bed"></BookOpen> <div className="report-c">Check Report</div>
        </div>
        <div className="waiting-check-container">
          <img src="https://avedex.cc/static/img/waitingCheck.51c8f641.svg" alt="" />
          <span className="waiting-text">Waiting for checking...</span>
        </div>
      </div>
    )
  }

  return (
    <CheckWrapperStyle>
      <div className="check-content">
        <div className="left">
          <div className="check-note">
            <div className="check-note_h">
              <AlertCircle className="h-circle" size="16"></AlertCircle>
              <div className="note-p">Please note</div>
            </div>
            <div className="check-note_c">
              Note: We can help you determine if a smart contract may be a scam, but there is no 100% guarantee and we
              are trying to do our best to detect all scams. The ave contract check is technically supported by
              gopluslabs.io. The contract check is only used as a reference for users, not as a basis for contract
              judgment. For inquiring about contract details and specifications, risk safety, etc., it is recommended to
              visit an authoritative auditing company.
            </div>
          </div>

          <div className="check-form">
            <div className="form-input">
              <div className="form-input__content">
                <div className="input-group">
                  <div className="group-select">
                    <img className="chain-img" src={currentCoin.value} alt="" />
                    <Input
                      allowClear
                      addonBefore={selectBefore}
                      onChange={e => inputChangeAddress(e)}
                      value={coinAddress}
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
              <div className="form-btn" onClick={handleCheckBtn}>
                Check
              </div>
            </div>
          </div>

          <div className="echart-rotate__content">
            <Progress width={260} strokeWidth={6} strokeColor="#f8be46" type="dashboard" percent={90} gapDegree={150} />
            <div className="risk-assess">Risk Assessment</div>
            <div className="poss-risk">Possible risks</div>
          </div>
        </div>
        <div className="right">
          {checkCoinResult && !isChecking ? rightHasContent(checkCoinResult) : rightNoContent()}
        </div>
      </div>
    </CheckWrapperStyle>
  )
}
