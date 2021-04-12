import cn from 'classnames';
import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { ICONS } from '../../utilities/icons';
import styles from './BreadCrumbs.module.scss';

export interface IBreadCrumbsProps {
    crumbs: {
        title?: string;
        route?: string;
    }[];
}

export const BreadCrumbs = (props: IBreadCrumbsProps): ReactElement => {
    const history = useHistory();
    const { crumbs } = props;
    return (
        <div className={styles.breadCrumbsWrapper}>
            <div className={styles.breadCrumbsContainer}>
                {crumbs.map((breadCrumb, key) => {
                    return (
                        <div className={cn(styles.breadCrumbNode)} key={key}>
                            {key !== 0 && (
                                <div className={styles.breadCrumbSeparator}>
                                    <ICONS.OTHER.FORWARD_SLASH />
                                </div>
                            )}
                            <div
                                className={cn(styles.breadCrumb, {
                                    [styles.breadCrumbWithLink]: !!breadCrumb.route,
                                })}
                                title={breadCrumb.title}
                                onClick={
                                    breadCrumb.route
                                        ? () => history.push(breadCrumb.route)
                                        : undefined
                                }
                            >
                                {breadCrumb.title !== undefined && (
                                    <div
                                        className={cn(styles.titleHolder, {
                                            [styles.currentBreadCrumbsNode]:
                                                key === crumbs.length - 1,
                                        })}
                                    >
                                        {breadCrumb.title}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
