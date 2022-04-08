import styled from 'styled-components'

export const CheckWrapperStyle = styled.div`
  background: #000;
  padding: 30px 15px;
  width: 100%;
  min-height: calc(90vh - 106px);
  margin-bottom: -5rem;
  margin-top: -39px;

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .table-f {
    text-align: center;
    color: rgba(119, 126, 144, 0.8);
    .thead-1 {
      flex: 157;
    }
    .thead-2 {
      flex: 93;
    }
    .thead-3 {
      flex: 93;
    }
    .thead {
      display: flex;
    }
    .tbody {
      display: flex;
      font-size: 12px;
    }
  }
  @media screen and (max-width: 1200px) {
    .check-content {
      flex-direction: column;
      align-items: center;
      .left {
        max-width: 100% !important;
        width: 100%;
      }
      .right {
        max-width: 100% !important;
        width: 100%;
      }
    }
  }
  .check-content {
    display: flex;
    width: 100%;
    background: #131722;
    border-radius: 2px;
    padding: 20px;
    min-height: calc(90vh - 106px);

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* background-color: pink; */
      max-width: 41.6666666667%;
      flex: 0 0 41.6666666667%;

      .echart-rotate__content {
        position: relative;
        margin-top: 50px;
        .ant-progress-text {
          color: #fff;
          top: 30%;
          font-size: 26px;
        }
        .risk-assess {
          color: #777e90;
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translateX(-50%);
        }
        .poss-risk {
          color: rgb(248, 190, 70);
          font-size: 14px;
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
        }
      }

      .check-note {
        width: 90%;
        background: rgba(255, 169, 77, 0.05);
        border: 2px solid rgba(255, 187, 25, 0.32);
        border-radius: 4px;
        font-size: 14px;
        color: #fff;
        font-weight: 500;
        padding: 20px;
        .check-note_h {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          font-size: 14px;
          color: #fff;
          font-weight: 700;
          .h-circle {
            font-size: 20px;
            color: #faad14;
            font-weight: 400;
            margin-right: 14px;
          }
        }
        .check-note_c {
          padding-left: 30px;
        }
      }

      .check-form {
        width: 90%;
        margin: 30px auto 0;
        text-align: center;
        .form-input {
          font-size: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;

          .form-input__content {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            width: 100%;
            flex: 1;
            line-height: 40px;
            height: 40px;
            position: relative;
            .input-group {
              display: flex;
              position: relative;
              vertical-align: top;
              line-height: normal;
              width: 100%;
              border-spacing: 0;
              justify-content: center;
              height: 40px;
              .group-select {
                position: relative;
                flex-shrink: 0;
                width: 80%;
                height: 40px;
                .chain-img {
                  position: absolute;
                  left: 10px;
                  top: 10px;
                  width: 20px;
                  height: 20px;
                  z-index: 10;
                }
                .ant-input-wrapper {
                  height: 40px;
                }

                .ant-input-group-addon .ant-select {
                  width: 130px;
                }
                .ant-select-selection-selected-value {
                  float: left;
                  margin-left: 30px;
                  max-width: 63%;
                }
                .ant-input {
                  height: 40px;
                }
              }
              /* .input-inner {
                width: 300px;
                padding-right: 35px;
                vertical-align: middle;
                display: table-cell;
                height: 40px;
                line-height: 40px;
                padding: 0 15px;
                outline: none;
              } */
            }
          }

          .form-btn {
            margin-top: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            width: 300px;
            height: 40px;
            border-radius: 10px;
            background-color: #558bed;
            cursor: pointer;
            :hover {
              background-color: rgb(119, 162, 241);
              outline: none;
            }
          }
        }
      }
    }
    .right {
      display: flex;
      justify-content: space-between;
      /* background-color: skyblue; */
      max-width: 58.3333333333%;
      flex: 0 0 58.3333333333%;

      .w100 {
        width: 100%;
      }
      .no-main {
        width: 100%;
        .waiting-check-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          position: relative;
          .waiting-text {
            margin-top: 20px;
            color: #777e90;
          }
        }
      }

      .top-title {
        display: flex;
        height: 20px;
        align-items: center;
        margin-bottom: 20px;
        .report-c {
          margin-left: 10px;
          font-size: 14px;
          color: #fff;
          font-weight: 500;
        }
      }
      .basic-info {
        background: #191e2d;
        border-radius: 10px;
        margin: 0 0 10px 0;
        padding: 15px 10px;
        color: #fff;
        .info-title {
          font-size: 15px;
          color: #fff;
          font-weight: 500;
          letter-spacing: 0;
          margin-bottom: 15px;
        }
        .info2-field {
          display: flex;
          flex-direction: column;
          margin-bottom: 15px;
          .field {
            margin-bottom: 0;
          }
        }
        .field {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          &.has-lock {
            flex-direction: column;
          }
          :last-child {
            margin-bottom: 0px;
          }
          .field-name {
            color: #777e90;
            &.alink {
              cursor: pointer;
              :hover {
                text-decoration: underline;
              }
            }
          }
          .field-value {
            color: #fff;
            &.danger {
              color: #f81111;
            }
            a {
              color: #878fbc;
              :hover {
                text-decoration: underline;
                color: #558bed;
              }
            }
          }
        }
      }
      .right-1 {
        /* flex: 1; */
        /* min-width: 350px; */
        width: 48%;

        .risk-check {
          background: #191e2d;
          border-radius: 10px;
          margin: 0 0 10px 0;
          padding: 15px 10px;
          .info-title {
            font-size: 15px;
            color: #fff;
            font-weight: 500;
            letter-spacing: 0;
            margin-bottom: 15px;
          }
          .card-list {
            color: #f8be46;
            text-decoration: line-through;
          }
        }

        .feedback-tips {
          font-size: 14px;
          color: #fff;
          padding: 30px 30px 20px 30px;
          line-height: 1.5;
          text-align: center;
          a {
            color: #878fbc;
            :hover {
              text-decoration: underline;
              color: #558bed;
            }
          }
        }

        .technical-support {
          font-size: 12px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10px 30px 20px 30px;
          cursor: pointer;
          .label {
            font-size: 14px;
          }
          img {
            width: 60px;
            margin: 15px 0 5px 0;
          }
        }
      }
      .right-2 {
        /* flex: 1; */
        /* min-width: 350px; */
        width: 48%;
        .share-report {
          text-align: right;
          margin-bottom: 7px;
          .btn-share {
            border: 1px solid hsla(0, 0%, 59.2%, 0.2);
            padding: 5px 20px;
            border-radius: 20px;
            display: inline-flex;
            align-items: center;
            font-size: 14px;
            color: #558bed;
            font-weight: 500;
            cursor: pointer;
            background-color: transparent;
            .share-re {
              font-size: 14px;
              color: #558bed;
              font-weight: 500;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`
